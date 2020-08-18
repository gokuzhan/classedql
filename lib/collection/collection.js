"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Collection = void 0;
const query_generator_1 = require("../utils/query-generator");
const _queryGenerator = new query_generator_1.QueryGenerator();
class Collection {
    static build(properties, options) {
        this.prototype.name = this.name;
        this.prototype.properties = properties;
        this.prototype.options = options;
    }
    schema(database) {
        const props = this.properties;
        const columns = Object.keys(props).map((key) => _queryGenerator.column(key, props[key]));
        return _queryGenerator.create(database, this.name, columns);
    }
}
exports.Collection = Collection;
