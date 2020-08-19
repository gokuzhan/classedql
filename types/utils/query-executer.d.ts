import { CollectionConstructor } from '..';
export declare class QueryExecuter {
    private _queryGenerator;
    private _logger;
    get logger(): boolean;
    private log;
    set setLogger(log: boolean);
    constructor(logger?: boolean);
    createCollection(connection: any, collection: CollectionConstructor): Promise<false | {
        sql: string;
        execution: any;
    }>;
    dropCollection(connection: any, collection: CollectionConstructor): Promise<false | {
        sql: string;
        execution: any;
    }>;
}
