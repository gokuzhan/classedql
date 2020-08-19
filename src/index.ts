import { Collection } from './collection/collection';
import { connectionManager } from './connection';
// index.ts
export type initConfig = {
  database: string;
  host: string;
  username: string;
  password?: string;
  options?: object;
  collation?: string;
};

export type initOperations = {
  force: boolean;
  alter: boolean;
};

export type CollectionConstructor = new (...args: any[]) => Collection;

/**
 * Main class to be instantiated to connect to the database
 */
export class ClassedQL {
  config!: initConfig;

  /**
   * Intialize ClassedQL with name of database, username and password.
   *
   * @param database {string} The name of the database.
   * @param username {string} The username which is used to authenticate against the database.
   * @param password {string} The password which is used to authenticate against the database.
   * @param options {initConfig} The options which is used to configuring the database.
   */
  constructor(database: string, username: string, password?: string, options?: initConfig) {
    this.config = {
      database,
      username,
      password,
      host: 'localhost',
      ...options,
    };
  }
  async initialize(collections: Record<string, CollectionConstructor>, operations?: initOperations) {
    const connection = await connectionManager(this.config);
    const _keys = Object.keys(collections);
    for (const key of _keys) (collections[key] as any).sync(connection);
  }
}
export default ClassedQL;
export * from './collection/collection';
export * from './datatypes/datatypes';
