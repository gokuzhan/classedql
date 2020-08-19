"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Collection = void 0;
const query_generator_1 = require("../utils/query-generator");
const query_executer_1 = require("../utils/query-executer");
const _queryGenerator = new query_generator_1.QueryGenerator();
const _queryExecuter = new query_executer_1.QueryExecuter();
class Collection {
    static build(properties, options) {
        this.prototype.name = this.name;
        this.prototype.properties = properties;
        this.prototype.options = options;
        this.prototype.instance = new this();
    }
    schema(database) {
        const props = this.properties;
        const columns = Object.keys(props).map((key) => _queryGenerator.column(key, props[key]));
        return _queryGenerator.create(database, this.name, columns);
    }
    static async _sync(connection) {
        return _queryExecuter.createCollection(connection, this);
    }
    static async _drop(connection) {
        return _queryExecuter.dropCollection(connection, this);
    }
}
exports.Collection = Collection;
