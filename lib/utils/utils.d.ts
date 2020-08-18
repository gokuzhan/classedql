import { DataType, DocumentPropertyOptions } from '../datatypes/datatypes';
export declare const TICK_CHAR = "`";
export declare function removeTicks(s: string, tickChar: string): string;
export declare function addTicks(s: string, tickChar: string): string;
export declare const setPropertyOptions: (object: DataType, options: DocumentPropertyOptions) => void;
