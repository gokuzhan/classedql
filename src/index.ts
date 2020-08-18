import { connectionManager } from './connection';
import * as logger from './utils/logger';
import { Collection } from './collection/collection';

export type initConfig = {
  database: string;
  host: string;
  username: string;
  password?: string;
  options?: object;
};

type AConstructorTypeOf<T> = new (...args: any[]) => T;

export default class ClassedQL {
  config!: initConfig;

  /**
   * Intialize classedql with name of database, username and password.
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
  async initialize(collections: Record<string, AConstructorTypeOf<Collection>>) {
    const connection = await connectionManager(this.config);

    Object.keys(collections).map(async (key) => {
      const collection = collections[key];
      const schemaString = new collection().schema(this.config.database);

      try {
        const resulset = await connection.query(schemaString);

        console.log(logger.successDebugScreen(collection.name, schemaString, JSON.stringify(resulset)));
      } catch (error) {
        console.log(logger.errorDebugScreen(collection.name, schemaString, error.message));
      }
    });
  }
}

export * from './datatypes/datatypes';
export * from './collection/collection';
