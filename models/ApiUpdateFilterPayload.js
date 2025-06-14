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
exports.instanceOfApiUpdateFilterPayload = instanceOfApiUpdateFilterPayload;
exports.ApiUpdateFilterPayloadFromJSON = ApiUpdateFilterPayloadFromJSON;
exports.ApiUpdateFilterPayloadFromJSONTyped = ApiUpdateFilterPayloadFromJSONTyped;
exports.ApiUpdateFilterPayloadToJSON = ApiUpdateFilterPayloadToJSON;
exports.ApiUpdateFilterPayloadToJSONTyped = ApiUpdateFilterPayloadToJSONTyped;
/**
 * Check if a given object implements the ApiUpdateFilterPayload interface.
 */
function instanceOfApiUpdateFilterPayload(value) {
    return true;
}
function ApiUpdateFilterPayloadFromJSON(json) {
    return ApiUpdateFilterPayloadFromJSONTyped(json, false);
}
function ApiUpdateFilterPayloadFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'expressions': json['expressions'] == null ? undefined : json['expressions'],
        'updateData': json['updateData'] == null ? undefined : json['updateData'],
    };
}
function ApiUpdateFilterPayloadToJSON(json) {
    return ApiUpdateFilterPayloadToJSONTyped(json, false);
}
function ApiUpdateFilterPayloadToJSONTyped(value, ignoreDiscriminator) {
    if (ignoreDiscriminator === void 0) { ignoreDiscriminator = false; }
    if (value == null) {
        return value;
    }
    return {
        'expressions': value['expressions'],
        'updateData': value['updateData'],
    };
}
