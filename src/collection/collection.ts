import { DocumentPropertyType } from '../datatypes/datatypes';
import { QueryGenerator } from '../utils/query-generator';
import { QueryExecuter } from '../utils/query-executer';

type DocumentProperties = Record<string, DocumentPropertyType>;

const _queryGenerator = new QueryGenerator();
const _queryExecuter = new QueryExecuter();

export class Collection {
  name!: string;
  properties!: DocumentProperties;
  options!: object;
  instance!: object;

  static build(properties: DocumentProperties, options: object) {
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
  static async sync(database: any) {
    return _queryExecuter.createCollection(database, this);
  }
}
