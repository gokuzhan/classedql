import { DocumentPropertyType } from '../datatypes/datatypes';
declare type DocumentProperties = Record<string, DocumentPropertyType>;
export declare class Collection {
    name: string;
    properties: DocumentProperties;
    options: object;
    static build(properties: DocumentProperties, options: object): void;
    schema(database: string): string;
}
export {};
