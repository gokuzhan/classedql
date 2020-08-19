import { DocumentPropertyType } from '../datatypes/datatypes';
import { QueryGenerator } from '../utils/query-generator';
import { QueryExecuter } from '../utils/query-executer';
import ClassedQL from '..';

export type DocumentProperties = Record<string, DocumentPropertyType>;
export type ClassedQLConstructor = new (...args: any[]) => ClassedQL;

export type CollectionOptions = {
  force?: boolean;
  // alter?: boolean;
};

const _queryGenerator = new QueryGenerator();
const _queryExecuter = new QueryExecuter();

export class Collection {
  name!: string;
  properties!: DocumentProperties;
  options!: object;
  instance!: object;

  static build(properties: DocumentProperties, options: CollectionOptions) {
    this.prototype.name = this.name;
    this.prototype.properties = properties;
    this.prototype.options = options;
    this.prototype.instance = new this();
  }
  schema(database: string) {
    const props = this.properties;
    const columns = Object.keys(props).map((key) => _queryGenerator.column(key, props[key]));
    return _queryGenerator.create(database, this.name, columns);
  }
  static async _sync(connection: any) {
    return _queryExecuter.createCollection(connection, this);
  }
  static async _drop(connection: any) {
    return _queryExecuter.dropCollection(connection, this);
  }
  // static async _alter(connection: any) {
  //   return _queryExecuter.alterCollection(connection, this);
  // }
}
