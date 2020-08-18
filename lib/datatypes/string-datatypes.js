"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ENUM = exports.TEXT = exports.CHAR = exports.VARCHAR = void 0;
const utils_1 = require("../utils/utils");
class VARCHAR {
    constructor(length = 255, binary = false) {
        this.length = 255;
        this.length = length;
        this.binary = binary;
    }
    toSql() {
        return ` VARCHAR(${this.length.toString()}) ${this.binary ? 'BINARY' : ''} `;
    }
    set(options) {
        utils_1.setPropertyOptions(this, options);
        return this;
    }
}
exports.VARCHAR = VARCHAR;
class CHAR {
    constructor(length = 255, binary = false) {
        this.length = length;
        this.binary = binary;
    }
    set(options) {
        utils_1.setPropertyOptions(this, options);
        return this;
    }
    toSql() {
        return ` CHAR(${this.length.toString()}) ${this.binary ? 'BINARY' : ''} `;
    }
}
exports.CHAR = CHAR;
class TEXT {
    constructor(length = 255, binary = false) {
        this.size = 'default';
        this.length = length;
        this.binary = binary;
    }
    set(options) {
        utils_1.setPropertyOptions(this, options);
        return this;
    }
    toSql() {
        return `${this.size !== 'default' ? this.size.toUpperCase() : ''} TEXT(${this.length.toString()}) ${this.binary ? 'BINARY' : ''} `;
    }
}
exports.TEXT = TEXT;
class ENUM {
    constructor(length = 255, binary = false) {
        this.values = [];
        this.length = length;
        this.binary = binary;
    }
    set(options) {
        utils_1.setPropertyOptions(this, options);
        return this;
    }
    toSql() {
        if (this.values.length <= 0)
            this.values.push('');
        return ` ENUM(${this.values
            .map((val) => `'${val}'`)
            .join(',')
            .toString()}) ${this.binary ? 'BINARY' : ''} `;
    }
}
exports.ENUM = ENUM;
