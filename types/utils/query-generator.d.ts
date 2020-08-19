import { DocumentPropertyType } from '../datatypes/datatypes';
export declare class QueryGenerator {
    create: (database: string, table: string, props: string[]) => string;
    drop: (database: string, table: string) => string;
    table(database: string, table: string, ifExists?: boolean, notExists?: boolean): string;
    column(name: string, config: DocumentPropertyType): string;
}
