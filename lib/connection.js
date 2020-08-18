"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectionManager = void 0;
const promise_1 = __importDefault(require("mysql2/promise"));
const bluebird_1 = __importDefault(require("bluebird"));
exports.connectionManager = async (config) => {
    const { database, host, username, password } = config;
    return await promise_1.default.createConnection({
        database,
        host,
        user: username,
        password,
        Promise: bluebird_1.default,
    });
};
