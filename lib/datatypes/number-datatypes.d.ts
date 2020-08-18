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
export declare class INTEGER implements IntegerDataType {
    length: number;
    unsigned: boolean;
    zerofill: boolean;
    constructor(length?: number, unsigned?: boolean, zerofill?: boolean);
    set(options: NumberPropertyOptions): this;
    toSql(): string;
}
export declare class BIGINTEGER implements IntegerDataType {
    length: number;
    unsigned: boolean;
    zerofill: boolean;
    constructor(length?: number, unsigned?: boolean, zerofill?: boolean);
    set(options: NumberPropertyOptions): this;
    toSql(): string;
}
export declare class MEDIUMINTEGER implements IntegerDataType {
    length: number;
    unsigned: boolean;
    zerofill: boolean;
    constructor(length?: number, unsigned?: boolean, zerofill?: boolean);
    set(options: NumberPropertyOptions): this;
    toSql(): string;
}
export declare class SMALLINTEGER implements IntegerDataType {
    length: number;
    unsigned: boolean;
    zerofill: boolean;
    constructor(length?: number, unsigned?: boolean, zerofill?: boolean);
    set(options: NumberPropertyOptions): this;
    toSql(): string;
}
export declare class TINYINTEGER implements IntegerDataType {
    length: number;
    unsigned: boolean;
    zerofill: boolean;
    constructor(length?: number, unsigned?: boolean, zerofill?: boolean);
    set(options: NumberPropertyOptions): this;
    toSql(): string;
}
export declare class DECIMAL implements IntegerDataType {
    length: number;
    scale: number;
    unsigned: boolean;
    zerofill: boolean;
    constructor(length?: number, scale?: number, unsigned?: boolean, zerofill?: boolean);
    set(options: NumberPropertyOptions): this;
    toSql(): string;
}
export declare class DOUBLE implements IntegerDataType {
    length: number;
    scale: number;
    unsigned: boolean;
    zerofill: boolean;
    constructor(length?: number, scale?: number, unsigned?: boolean, zerofill?: boolean);
    set(options: NumberPropertyOptions): this;
    toSql(): string;
}
