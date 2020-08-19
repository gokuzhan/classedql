import { DocumentPropertyType } from '../datatypes/datatypes';
declare type DocumentProperties = Record<string, DocumentPropertyType>;
export declare class Collection {
    name: string;
    properties: DocumentProperties;
    options: object;
    instance: object;
    static build(properties: DocumentProperties, options: object): void;
    schema(database: string): string;
    static sync(database: any): Promise<false | {
        sql: string;
        execution: any;
    }>;
}
export {};
