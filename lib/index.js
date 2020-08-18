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
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
const connection_1 = require("./connection");
const logger = __importStar(require("./utils/logger"));
class ClassedQL {
    constructor(database, username, password, options) {
        this.config = {
            database,
            username,
            password,
            host: 'localhost',
            ...options,
        };
    }
    async initialize(collections) {
        const connection = await connection_1.connectionManager(this.config);
        Object.keys(collections).map(async (key) => {
            const collection = collections[key];
            const schemaString = new collection().schema(this.config.database);
            try {
                const resulset = await connection.query(schemaString);
                console.log(logger.successDebugScreen(collection.name, schemaString, JSON.stringify(resulset)));
            }
            catch (error) {
                console.log(logger.errorDebugScreen(collection.name, schemaString, error.message));
            }
        });
    }
}
exports.default = ClassedQL;
__exportStar(require("./datatypes/datatypes"), exports);
__exportStar(require("./collection/collection"), exports);
