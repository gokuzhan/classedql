"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueryTypes = void 0;
var QueryTypes;
(function (QueryTypes) {
    QueryTypes["SELECT"] = "SELECT";
    QueryTypes["INSERT"] = "INSERT";
    QueryTypes["UPDATE"] = "UPDATE";
    QueryTypes["BULKUPDATE"] = "BULKUPDATE";
    QueryTypes["BULKDELETE"] = "BULKDELETE";
    QueryTypes["DELETE"] = "DELETE";
    QueryTypes["UPSERT"] = "UPSERT";
})(QueryTypes = exports.QueryTypes || (exports.QueryTypes = {}));
