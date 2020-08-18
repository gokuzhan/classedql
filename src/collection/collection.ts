import { DocumentPropertyType } from '../datatypes/datatypes';
import { QueryGenerator } from '../utils/query-generator';

type DocumentProperties = Record<string, DocumentPropertyType>;

const _queryGenerator = new QueryGenerator();

export class Collection {
  name!: string;
  properties!: DocumentProperties;
  options!: object;

  static build(properties: DocumentProperties, options: object) {
    this.prototype.name = this.name;
    this.prototype.properties = properties;
    this.prototype.options = options;
  }
  schema(database: string) {
    const props = this.properties;
    const columns = Object.keys(props).map((key) => _queryGenerator.column(key, props[key]));
    return _queryGenerator.create(database, this.name, columns);
  }
}
