import { DataType, DocumentPropertyOptions } from './datatypes';
export declare type TextDataTypeSize = 'long' | 'medium' | 'tiny' | 'default';
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
export declare class VARCHAR implements VarcharDataType {
    length: number;
    binary: boolean;
    constructor(length?: number, binary?: boolean);
    toSql(): string;
    set(options: StringPropertyOptions): this;
}
export declare class CHAR implements CharDataType {
    length: number;
    binary: boolean;
    constructor(length?: number, binary?: boolean);
    set(options: StringPropertyOptions): this;
    toSql(): string;
}
export declare class TEXT implements TextDataType {
    length: number;
    binary: boolean;
    size: TextDataTypeSize;
    constructor(length?: number, binary?: boolean);
    set(options: StringPropertyOptions): this;
    toSql(): string;
}
export declare class ENUM implements EnumDataType {
    length: number;
    binary: boolean;
    values: string[];
    constructor(length?: number, binary?: boolean);
    set(options: StringPropertyOptions): this;
    toSql(): string;
}
