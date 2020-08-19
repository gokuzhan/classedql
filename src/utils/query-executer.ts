import { QueryGenerator } from './query-generator';
import * as logger from '../utils/logger';
import { CollectionConstructor } from '..';

export class QueryExecuter {
  private _queryGenerator = new QueryGenerator();

  private _logger!: boolean;

  get logger() {
    return this._logger;
  }

  private log = (log: string) => {
    if (this.logger) console.log(log);
  };

  set setLogger(log: boolean) {
    this._logger = log;
  }

  constructor(logger: boolean = true) {
    this.setLogger = logger;
  }

  async createCollection(connection: any, collection: CollectionConstructor) {
    const config = connection.config;
    const props = collection.prototype.properties;
    const columns = Object.keys(props).map((key) => this._queryGenerator.column(key, props[key]));
    const sql = this._queryGenerator.create(config.database, collection.name, columns);
    try {
      const execution = await connection.query(sql);
      this.log(logger.successDebugScreen(collection.name, sql, JSON.stringify(execution)));
      return { sql, execution };
    } catch (error) {
      this.log(logger.errorDebugScreen(collection.name, sql, JSON.stringify(error.message)));
      return false;
    }
  }
}
