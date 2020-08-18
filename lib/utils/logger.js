"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.successDebugScreen = exports.errorDebugScreen = void 0;
const table_1 = require("table");
const chalk_1 = __importDefault(require("chalk"));
const config = {
    border: {
        topBody: `─`,
        topJoin: `┬`,
        topLeft: `┌`,
        topRight: `┐`,
        bottomBody: `─`,
        bottomJoin: `┴`,
        bottomLeft: `└`,
        bottomRight: `┘`,
        bodyLeft: `│`,
        bodyRight: `│`,
        bodyJoin: `│`,
        joinBody: `─`,
        joinLeft: `├`,
        joinRight: `┤`,
        joinJoin: `┼`,
    },
};
exports.errorDebugScreen = (model, sql, message) => table_1.table([
    [chalk_1.default.whiteBright.bold(' Executing '), chalk_1.default.whiteBright.bold(` ${model} `)],
    [chalk_1.default.white.bold(' 👎 SQL'), chalk_1.default.redBright(sql)],
    [chalk_1.default.white.bgRed.bold(' Error! '), chalk_1.default.whiteBright(message)],
], config);
exports.successDebugScreen = (model, sql, message) => table_1.table([
    [chalk_1.default.whiteBright.bold(' Executing '), chalk_1.default.whiteBright.bold(` ${model} `)],
    [chalk_1.default.white.bold(' 👍 SQL'), chalk_1.default.greenBright(sql)],
    [chalk_1.default.whiteBright.bgAnsi(2).bold(' Success! '), chalk_1.default.whiteBright(message)],
], config);
