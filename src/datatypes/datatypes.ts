import { INTEGER, BIGINTEGER, MEDIUMINTEGER, SMALLINTEGER, TINYINTEGER, DECIMAL, DOUBLE } from './number-datatypes';
import { CHAR, TEXT, VARCHAR, ENUM } from './string-datatypes';

export type DocumentPropertyType = {
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

export const DataTypes = {
  // Numeric DataTypes
  INTEGER: new INTEGER(),
  BIGINTEGER: new BIGINTEGER(),
  MEDIUMINTEGER: new MEDIUMINTEGER(),
  SMALLINTEGER: new SMALLINTEGER(),
  TINYINTEGER: new TINYINTEGER(),
  DECIMAL: new DECIMAL(),
  DOUBLE: new DOUBLE(),
  // String DataTypes
  VARCHAR: new VARCHAR(),
  CHAR: new CHAR(),
  TEXT: new TEXT(),
  ENUM: new ENUM(),
};
