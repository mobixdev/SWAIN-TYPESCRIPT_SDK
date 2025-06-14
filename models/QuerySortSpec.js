"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * SWAIN API
 * A powerful dynamic CRUD API engine that automatically generates RESTful endpoints for your data models SWAIN provides automatic CRUD operations, filtering, pagination, and sorting capabilities for any data model. Features: - Automatic REST API generation - Dynamic model support - Complex filtering and querying - Pagination and sorting - Swagger/OpenAPI documentation - Multiple database support (SQL & NoSQL)
 *
 * The version of the OpenAPI document: 1.0.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.instanceOfQuerySortSpec = instanceOfQuerySortSpec;
exports.QuerySortSpecFromJSON = QuerySortSpecFromJSON;
exports.QuerySortSpecFromJSONTyped = QuerySortSpecFromJSONTyped;
exports.QuerySortSpecToJSON = QuerySortSpecToJSON;
exports.QuerySortSpecToJSONTyped = QuerySortSpecToJSONTyped;
/**
 * Check if a given object implements the QuerySortSpec interface.
 */
function instanceOfQuerySortSpec(value) {
    return true;
}
function QuerySortSpecFromJSON(json) {
    return QuerySortSpecFromJSONTyped(json, false);
}
function QuerySortSpecFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'direction': json['direction'] == null ? undefined : json['direction'],
        'field': json['field'] == null ? undefined : json['field'],
    };
}
function QuerySortSpecToJSON(json) {
    return QuerySortSpecToJSONTyped(json, false);
}
function QuerySortSpecToJSONTyped(value, ignoreDiscriminator) {
    if (ignoreDiscriminator === void 0) { ignoreDiscriminator = false; }
    if (value == null) {
        return value;
    }
    return {
        'direction': value['direction'],
        'field': value['field'],
    };
}
