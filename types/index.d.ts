import { Collection } from './collection/collection';
export declare type initConfig = {
    database: string;
    host: string;
    username: string;
    password?: string;
    options?: object;
    collation?: string;
};
export declare type initOperations = {
    force: boolean;
    alter: boolean;
};
export declare type CollectionConstructor = new (...args: any[]) => Collection;
export declare class ClassedQL {
    config: initConfig;
    constructor(database: string, username: string, password?: string, options?: initConfig);
    initialize(collections: Record<string, CollectionConstructor>, operations?: initOperations): Promise<void>;
}
export default ClassedQL;
export * from './collection/collection';
export * from './datatypes/datatypes';
