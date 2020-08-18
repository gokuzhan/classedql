import mysql from 'mysql2/promise';
import bluebird from 'bluebird';
import { initConfig } from '.';

// create the connection to database
export const connectionManager = async (config: initConfig) => {
  const { database, host, username, password } = config;
  return await mysql.createConnection({
    database,
    host,
    user: username,
    password,
    Promise: bluebird,
  });
};
