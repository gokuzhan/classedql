import { INTEGER, BIGINTEGER, MEDIUMINTEGER, SMALLINTEGER, TINYINTEGER, DECIMAL, DOUBLE } from './number-datatypes';
import { CHAR, TEXT, VARCHAR, ENUM } from './string-datatypes';
export declare type DocumentPropertyType = {
    type: DataType;
    length?: number;
    null?: boolean;
    default?: string;
    auto_increment?: boolean;
    primary_key?: boolean;
    unique?: boolean;
    comment?: string;
    index?: boolean;
    fulltext?: boolean;
    spatial?: boolean;
    collation?: string;
    virtuality?: string;
    order?: number;
};
export interface DocumentPropertyOptions {
    length?: number;
}
export interface DataType {
    length?: number;
    toSql(): string;
}
export declare const DataTypes: {
    INTEGER: INTEGER;
    BIGINTEGER: BIGINTEGER;
    MEDIUMINTEGER: MEDIUMINTEGER;
    SMALLINTEGER: SMALLINTEGER;
    TINYINTEGER: TINYINTEGER;
    DECIMAL: DECIMAL;
    DOUBLE: DOUBLE;
    VARCHAR: VARCHAR;
    CHAR: CHAR;
    TEXT: TEXT;
    ENUM: ENUM;
};
