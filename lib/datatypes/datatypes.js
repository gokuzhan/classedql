"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataTypes = void 0;
const number_datatypes_1 = require("./number-datatypes");
const string_datatypes_1 = require("./string-datatypes");
exports.DataTypes = {
    INTEGER: new number_datatypes_1.INTEGER(),
    BIGINTEGER: new number_datatypes_1.BIGINTEGER(),
    MEDIUMINTEGER: new number_datatypes_1.MEDIUMINTEGER(),
    SMALLINTEGER: new number_datatypes_1.SMALLINTEGER(),
    TINYINTEGER: new number_datatypes_1.TINYINTEGER(),
    DECIMAL: new number_datatypes_1.DECIMAL(),
    DOUBLE: new number_datatypes_1.DOUBLE(),
    VARCHAR: new string_datatypes_1.VARCHAR(),
    CHAR: new string_datatypes_1.CHAR(),
    TEXT: new string_datatypes_1.TEXT(),
    ENUM: new string_datatypes_1.ENUM(),
};
