"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueryExecuter = void 0;
const query_generator_1 = require("./query-generator");
const logger = __importStar(require("../utils/logger"));
class QueryExecuter {
    constructor(logger = true) {
        this._queryGenerator = new query_generator_1.QueryGenerator();
        this.log = (log) => {
            if (this.logger)
                console.log(log);
        };
        this.setLogger = logger;
    }
    get logger() {
        return this._logger;
    }
    set setLogger(log) {
        this._logger = log;
    }
    async createCollection(connection, collection) {
        const config = connection.config;
        const props = collection.prototype.properties;
        const columns = Object.keys(props).map((key) => this._queryGenerator.column(key, props[key]));
        const sql = this._queryGenerator.create(config.database, collection.name, columns);
        try {
            const execution = await connection.query(sql);
            this.log(logger.successDebugScreen(collection.name, sql, JSON.stringify(execution)));
            return { sql, execution };
        }
        catch (error) {
            this.log(logger.errorDebugScreen(collection.name, sql, JSON.stringify(error.message)));
            return false;
        }
    }
}
exports.QueryExecuter = QueryExecuter;
