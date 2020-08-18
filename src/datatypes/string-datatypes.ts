// String Datatypes

import { setPropertyOptions } from '../utils/utils';
import { DataType, DocumentPropertyOptions } from './datatypes';

export type TextDataTypeSize = 'long' | 'medium' | 'tiny' | 'default';

export interface StringPropertyOptions extends DocumentPropertyOptions {
  binary?: boolean;
}

export interface VarcharDataType extends DataType {
  length: number;
  binary: boolean;
  set(options: StringPropertyOptions): this;
}

export interface CharDataType extends DataType {
  length: number;
  binary: boolean;
  set(options: StringPropertyOptions): this;
}

export interface TextDataType extends DataType {
  length: number;
  binary: boolean;
  size: TextDataTypeSize;
  set(options: StringPropertyOptions): this;
}

export interface EnumDataType extends DataType {
  length: number;
  binary: boolean;
  values: string[];
  set(options: StringPropertyOptions): this;
}

export interface SetDataType extends DataType {
  length: number;
  binary: boolean;
  set(options: StringPropertyOptions): this;
}

/**
 * VARCHAR
 */

export class VARCHAR implements VarcharDataType {
  length: number = 255;
  binary: boolean;

  constructor(length: number = 255, binary: boolean = false) {
    this.length = length;
    this.binary = binary;
  }

  toSql() {
    return ` VARCHAR(${this.length.toString()}) ${this.binary ? 'BINARY' : ''} `;
  }

  set(options: StringPropertyOptions): this {
    setPropertyOptions(this, options);
    return this;
  }
}

/**
 * CHAR
 */

export class CHAR implements CharDataType {
  length!: number;
  binary: boolean;

  constructor(length: number = 255, binary: boolean = false) {
    this.length = length;
    this.binary = binary;
  }
  set(options: StringPropertyOptions): this {
    setPropertyOptions(this, options);
    return this;
  }
  toSql() {
    return ` CHAR(${this.length.toString()}) ${this.binary ? 'BINARY' : ''} `;
  }
}

/**
 * TEXT
 */

export class TEXT implements TextDataType {
  length!: number;
  binary: boolean;
  size: TextDataTypeSize = 'default';

  constructor(length: number = 255, binary: boolean = false) {
    this.length = length;
    this.binary = binary;
  }
  set(options: StringPropertyOptions): this {
    setPropertyOptions(this, options);
    return this;
  }

  toSql() {
    return `${this.size !== 'default' ? this.size.toUpperCase() : ''} TEXT(${this.length.toString()}) ${
      this.binary ? 'BINARY' : ''
    } `;
  }
}

/**
 * ENUM
 */

export class ENUM implements EnumDataType {
  length!: number;
  binary: boolean;
  values: string[] = [];

  constructor(length: number = 255, binary: boolean = false) {
    this.length = length;
    this.binary = binary;
  }
  set(options: StringPropertyOptions): this {
    setPropertyOptions(this, options);
    return this;
  }

  toSql() {
    if (this.values.length <= 0) this.values.push('');
    return ` ENUM(${this.values
      .map((val) => `'${val}'`)
      .join(',')
      .toString()}) ${this.binary ? 'BINARY' : ''} `;
  }
}
