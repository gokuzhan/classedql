"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DOUBLE = exports.DECIMAL = exports.TINYINTEGER = exports.SMALLINTEGER = exports.MEDIUMINTEGER = exports.BIGINTEGER = exports.INTEGER = void 0;
const utils_1 = require("../utils/utils");
class INTEGER {
    constructor(length = 255, unsigned = false, zerofill = false) {
        this.length = length;
        this.unsigned = unsigned;
        this.zerofill = zerofill;
    }
    set(options) {
        utils_1.setPropertyOptions(this, options);
        return this;
    }
    toSql() {
        return ` INT(${this.length.toString()}) ${this.unsigned ? 'UNSIGNED' : ''} ${this.zerofill ? 'ZEROFILL' : ''} `;
    }
}
exports.INTEGER = INTEGER;
class BIGINTEGER {
    constructor(length = 255, unsigned = false, zerofill = false) {
        this.length = length;
        this.unsigned = unsigned;
        this.zerofill = zerofill;
    }
    set(options) {
        utils_1.setPropertyOptions(this, options);
        return this;
    }
    toSql() {
        return ` BIGINT(${this.length.toString()}) ${this.unsigned ? 'UNSIGNED' : ''} ${this.zerofill ? 'ZEROFILL' : ''} `;
    }
}
exports.BIGINTEGER = BIGINTEGER;
class MEDIUMINTEGER {
    constructor(length = 255, unsigned = false, zerofill = false) {
        this.length = length;
        this.unsigned = unsigned;
        this.zerofill = zerofill;
    }
    set(options) {
        utils_1.setPropertyOptions(this, options);
        return this;
    }
    toSql() {
        return ` MEDIUMINT(${this.length.toString()}) ${this.unsigned ? 'UNSIGNED' : ''} ${this.zerofill ? 'ZEROFILL' : ''} `;
    }
}
exports.MEDIUMINTEGER = MEDIUMINTEGER;
class SMALLINTEGER {
    constructor(length = 255, unsigned = false, zerofill = false) {
        this.length = length;
        this.unsigned = unsigned;
        this.zerofill = zerofill;
    }
    set(options) {
        utils_1.setPropertyOptions(this, options);
        return this;
    }
    toSql() {
        return ` SMALLINT(${this.length.toString()}) ${this.unsigned ? 'UNSIGNED' : ''} ${this.zerofill ? 'ZEROFILL' : ''} `;
    }
}
exports.SMALLINTEGER = SMALLINTEGER;
class TINYINTEGER {
    constructor(length = 255, unsigned = false, zerofill = false) {
        this.length = length;
        this.unsigned = unsigned;
        this.zerofill = zerofill;
    }
    set(options) {
        utils_1.setPropertyOptions(this, options);
        return this;
    }
    toSql() {
        return ` TINYINT(${this.length.toString()}) ${this.unsigned ? 'UNSIGNED' : ''} ${this.zerofill ? 'ZEROFILL' : ''} `;
    }
}
exports.TINYINTEGER = TINYINTEGER;
class DECIMAL {
    constructor(length = 20, scale = 0, unsigned = false, zerofill = false) {
        this.length = length;
        this.scale = scale;
        this.unsigned = unsigned;
        this.zerofill = zerofill;
    }
    set(options) {
        utils_1.setPropertyOptions(this, options);
        return this;
    }
    toSql() {
        return ` DECIMAL(${this.length.toString()},${this.scale.toString()}) ${this.unsigned ? 'UNSIGNED' : ''} ${this.zerofill ? 'ZEROFILL' : ''} `;
    }
}
exports.DECIMAL = DECIMAL;
class DOUBLE {
    constructor(length = 20, scale = 0, unsigned = false, zerofill = false) {
        this.length = length;
        this.scale = scale;
        this.unsigned = unsigned;
        this.zerofill = zerofill;
    }
    set(options) {
        utils_1.setPropertyOptions(this, options);
        return this;
    }
    toSql() {
        return ` DECIMAL(${this.length.toString()},${this.scale.toString()}) ${this.unsigned ? 'UNSIGNED' : ''} ${this.zerofill ? 'ZEROFILL' : ''} `;
    }
}
exports.DOUBLE = DOUBLE;
