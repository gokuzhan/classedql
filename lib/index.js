"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClassedQL = void 0;
const connection_1 = require("./connection");
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
    async initialize(collections, operations) {
        const connection = await connection_1.connectionManager(this.config);
        const _keys = Object.keys(collections);
        if (operations != null) {
            if (operations.alter) {
                for (const key of _keys)
                    collections[key]._alter(connection);
                return;
            }
            if (operations.force && !operations.alter)
                for (const key of _keys)
                    collections[key]._drop(connection);
            for (const key of _keys)
                collections[key]._sync(connection);
        }
    }
}
exports.ClassedQL = ClassedQL;
exports.default = ClassedQL;
__exportStar(require("./collection/collection"), exports);
__exportStar(require("./datatypes/datatypes"), exports);
