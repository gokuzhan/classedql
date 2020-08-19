import { DocumentPropertyType } from '../datatypes/datatypes';
import ClassedQL from '..';
export declare type DocumentProperties = Record<string, DocumentPropertyType>;
export declare type ClassedQLConstructor = new (...args: any[]) => ClassedQL;
export declare type CollectionOptions = {
    force?: boolean;
    alter?: boolean;
};
export declare class Collection {
    name: string;
    properties: DocumentProperties;
    options: object;
    instance: object;
    static build(properties: DocumentProperties, options: CollectionOptions): void;
    schema(database: string): string;
    static _sync(connection: any): Promise<false | {
        sql: string;
        execution: any;
    }>;
    static _drop(connection: any): Promise<false | {
        sql: string;
        execution: any;
    }>;
    static _alter(connection: any): Promise<false | {
        sql: string;
        execution: any;
    }>;
}
