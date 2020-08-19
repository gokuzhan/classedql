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
exports.QueryGenerator = void 0;
const Utils = __importStar(require("./utils"));
class QueryGenerator {
    constructor() {
        this.create = (database, table, props) => {
            let query = `CREATE `;
            query += `${this.table(database, table)}`;
            query += ` ( ${props.join(',')} );`;
            return query;
        };
        this.drop = (database, table) => {
            let query = `DROP `;
            query += `${this.table(database, table, true, false)};`;
            return query;
        };
    }
    table(database, table, ifExists = true, notExists = true) {
        let query = `TABLE `;
        if (ifExists && !notExists)
            query += 'IF EXISTS';
        if (notExists)
            query += 'IF NOT EXISTS';
        query += ` ${Utils.addTicks(database, '`')}.${Utils.addTicks(table, '`')}`;
        return query;
    }
    column(name, config) {
        let field = Utils.addTicks(name, '`');
        field += config.type.toSql();
        field += config.null === true ? 'NULL' : 'NOT NULL';
        config.comment ? (field += ` COMMENT '${config.comment.toString()}' `) : null;
        config.auto_increment === true ? (field += ' AUTO_INCREMENT ') : null;
        config.primary_key === true ? (field += `, PRIMARY KEY (${Utils.addTicks(name, '`')}) `) : null;
        return field;
    }
}
exports.QueryGenerator = QueryGenerator;
