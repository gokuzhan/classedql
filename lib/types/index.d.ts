import { Collection } from './collection/collection';
export declare type initConfig = {
    database: string;
    host: string;
    username: string;
    password?: string;
    options?: object;
};
declare type AConstructorTypeOf<T> = new (...args: any[]) => T;
export declare class ClassedQL {
    config: initConfig;
    constructor(database: string, username: string, password?: string, options?: initConfig);
    initialize(collections: Record<string, AConstructorTypeOf<Collection>>): Promise<void>;
}
export default ClassedQL;
export * from './datatypes/datatypes';
export * from './collection/collection';
