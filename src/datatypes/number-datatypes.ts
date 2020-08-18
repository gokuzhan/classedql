// Number Datatypes

import { setPropertyOptions } from '../utils/utils';
import { DocumentPropertyOptions, DataType } from './datatypes';

export interface NumberPropertyOptions extends DocumentPropertyOptions {
  unsigned?: boolean;
  zerofill?: boolean;
}

export interface IntegerDataType extends DataType {
  length: number;
  unsigned: boolean;
  zerofill: boolean;
  set(options: NumberPropertyOptions): this;
}

export class INTEGER implements IntegerDataType {
  length!: number;
  unsigned!: boolean;
  zerofill!: boolean;

  constructor(length: number = 255, unsigned: boolean = false, zerofill: boolean = false) {
    this.length = length;
    this.unsigned = unsigned;
    this.zerofill = zerofill;
  }

  set(options: NumberPropertyOptions): this {
    setPropertyOptions(this, options);
    return this;
  }

  toSql() {
    return ` INT(${this.length.toString()}) ${this.unsigned ? 'UNSIGNED' : ''} ${this.zerofill ? 'ZEROFILL' : ''} `;
  }
}

export class BIGINTEGER implements IntegerDataType {
  length!: number;
  unsigned!: boolean;
  zerofill!: boolean;

  constructor(length: number = 255, unsigned: boolean = false, zerofill: boolean = false) {
    this.length = length;
    this.unsigned = unsigned;
    this.zerofill = zerofill;
  }

  set(options: NumberPropertyOptions): this {
    setPropertyOptions(this, options);
    return this;
  }

  toSql() {
    return ` BIGINT(${this.length.toString()}) ${this.unsigned ? 'UNSIGNED' : ''} ${this.zerofill ? 'ZEROFILL' : ''} `;
  }
}

export class MEDIUMINTEGER implements IntegerDataType {
  length!: number;
  unsigned!: boolean;
  zerofill!: boolean;

  constructor(length: number = 255, unsigned: boolean = false, zerofill: boolean = false) {
    this.length = length;
    this.unsigned = unsigned;
    this.zerofill = zerofill;
  }

  set(options: NumberPropertyOptions): this {
    setPropertyOptions(this, options);
    return this;
  }

  toSql() {
    return ` MEDIUMINT(${this.length.toString()}) ${this.unsigned ? 'UNSIGNED' : ''} ${
      this.zerofill ? 'ZEROFILL' : ''
    } `;
  }
}

export class SMALLINTEGER implements IntegerDataType {
  length!: number;
  unsigned!: boolean;
  zerofill!: boolean;

  constructor(length: number = 255, unsigned: boolean = false, zerofill: boolean = false) {
    this.length = length;
    this.unsigned = unsigned;
    this.zerofill = zerofill;
  }

  set(options: NumberPropertyOptions): this {
    setPropertyOptions(this, options);
    return this;
  }

  toSql() {
    return ` SMALLINT(${this.length.toString()}) ${this.unsigned ? 'UNSIGNED' : ''} ${
      this.zerofill ? 'ZEROFILL' : ''
    } `;
  }
}

export class TINYINTEGER implements IntegerDataType {
  length!: number;
  unsigned!: boolean;
  zerofill!: boolean;

  constructor(length: number = 255, unsigned: boolean = false, zerofill: boolean = false) {
    this.length = length;
    this.unsigned = unsigned;
    this.zerofill = zerofill;
  }

  set(options: NumberPropertyOptions): this {
    setPropertyOptions(this, options);
    return this;
  }

  toSql() {
    return ` TINYINT(${this.length.toString()}) ${this.unsigned ? 'UNSIGNED' : ''} ${this.zerofill ? 'ZEROFILL' : ''} `;
  }
}

export class DECIMAL implements IntegerDataType {
  length!: number;
  scale!: number;
  unsigned!: boolean;
  zerofill!: boolean;

  constructor(length: number = 20, scale: number = 0, unsigned: boolean = false, zerofill: boolean = false) {
    this.length = length;
    this.scale = scale;
    this.unsigned = unsigned;
    this.zerofill = zerofill;
  }

  set(options: NumberPropertyOptions): this {
    setPropertyOptions(this, options);
    return this;
  }

  toSql() {
    return ` DECIMAL(${this.length.toString()},${this.scale.toString()}) ${this.unsigned ? 'UNSIGNED' : ''} ${
      this.zerofill ? 'ZEROFILL' : ''
    } `;
  }
}

export class DOUBLE implements IntegerDataType {
  length!: number;
  scale!: number;
  unsigned!: boolean;
  zerofill!: boolean;

  constructor(length: number = 20, scale: number = 0, unsigned: boolean = false, zerofill: boolean = false) {
    this.length = length;
    this.scale = scale;
    this.unsigned = unsigned;
    this.zerofill = zerofill;
  }

  set(options: NumberPropertyOptions): this {
    setPropertyOptions(this, options);
    return this;
  }

  toSql() {
    return ` DECIMAL(${this.length.toString()},${this.scale.toString()}) ${this.unsigned ? 'UNSIGNED' : ''} ${
      this.zerofill ? 'ZEROFILL' : ''
    } `;
  }
}
