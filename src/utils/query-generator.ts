import * as Utils from './utils';
import { DocumentPropertyType } from '../datatypes/datatypes';

export class QueryGenerator {
  /**
   * DDL statements, such as CREATE, ALTER, and DROP
   */

  create = (database: string, table: string, props: string[]) => {
    let query = `CREATE `;
    query += `${this.table(database, table)}`;
    query += ` ( ${props.join(',')} );`;
    return query;
  };

  drop = (database: string, table: string) => {
    let query = `DROP `;
    query += `${this.table(database, table, true, false)};`;
    return query;
  };

  alter = (database: string, table: string, props: string[]) => {
    let query = `ALTER `;
    query += `${this.table(database, table, false, false)};`;
    query += ` ( ${props.join(',')} );`;
    return query;
  };

  table(database: string, table: string, ifExists: boolean = true, notExists: boolean = true) {
    let query = `TABLE `;
    if (ifExists && !notExists) query += 'IF EXISTS';
    if (notExists) query += 'IF NOT EXISTS';
    query += ` ${Utils.addTicks(database, '`')}.${Utils.addTicks(table, '`')}`;
    return query;
  }

  column(name: string, config: DocumentPropertyType) {
    let field = Utils.addTicks(name, '`');
    field += config.type.toSql();
    field += config.null === true ? 'NULL' : 'NOT NULL';
    config.comment ? (field += ` COMMENT '${config.comment.toString()}' `) : null;
    config.auto_increment === true ? (field += ' AUTO_INCREMENT ') : null;
    config.primary_key === true ? (field += `, PRIMARY KEY (${Utils.addTicks(name, '`')}) `) : null;
    return field;
  }

  // `id` BIGINT(20) UNSIGNED AS (121) STORED NOT NULL COMMENT 'identity' , PRIMARY KEY (`id`)

  /**
   * DML statements, such as SELECT, INSERT, UPDATE, and DELETE
   */
}
