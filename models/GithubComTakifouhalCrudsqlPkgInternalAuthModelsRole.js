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
exports.instanceOfGithubComTakifouhalCrudsqlPkgInternalAuthModelsRole = instanceOfGithubComTakifouhalCrudsqlPkgInternalAuthModelsRole;
exports.GithubComTakifouhalCrudsqlPkgInternalAuthModelsRoleFromJSON = GithubComTakifouhalCrudsqlPkgInternalAuthModelsRoleFromJSON;
exports.GithubComTakifouhalCrudsqlPkgInternalAuthModelsRoleFromJSONTyped = GithubComTakifouhalCrudsqlPkgInternalAuthModelsRoleFromJSONTyped;
exports.GithubComTakifouhalCrudsqlPkgInternalAuthModelsRoleToJSON = GithubComTakifouhalCrudsqlPkgInternalAuthModelsRoleToJSON;
exports.GithubComTakifouhalCrudsqlPkgInternalAuthModelsRoleToJSONTyped = GithubComTakifouhalCrudsqlPkgInternalAuthModelsRoleToJSONTyped;
var GithubComTakifouhalCrudsqlPkgInternalAuthModelsPermission_1 = require("./GithubComTakifouhalCrudsqlPkgInternalAuthModelsPermission");
var GithubComTakifouhalCrudsqlPkgInternalAuthModelsUser_1 = require("./GithubComTakifouhalCrudsqlPkgInternalAuthModelsUser");
/**
 * Check if a given object implements the GithubComTakifouhalCrudsqlPkgInternalAuthModelsRole interface.
 */
function instanceOfGithubComTakifouhalCrudsqlPkgInternalAuthModelsRole(value) {
    return true;
}
function GithubComTakifouhalCrudsqlPkgInternalAuthModelsRoleFromJSON(json) {
    return GithubComTakifouhalCrudsqlPkgInternalAuthModelsRoleFromJSONTyped(json, false);
}
function GithubComTakifouhalCrudsqlPkgInternalAuthModelsRoleFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'createdAt': json['created_at'] == null ? undefined : json['created_at'],
        'description': json['description'] == null ? undefined : json['description'],
        'id': json['id'] == null ? undefined : json['id'],
        'name': json['name'] == null ? undefined : json['name'],
        'permissions': json['permissions'] == null ? undefined : (json['permissions'].map(GithubComTakifouhalCrudsqlPkgInternalAuthModelsPermission_1.GithubComTakifouhalCrudsqlPkgInternalAuthModelsPermissionFromJSON)),
        'updatedAt': json['updated_at'] == null ? undefined : json['updated_at'],
        'users': json['users'] == null ? undefined : (json['users'].map(GithubComTakifouhalCrudsqlPkgInternalAuthModelsUser_1.GithubComTakifouhalCrudsqlPkgInternalAuthModelsUserFromJSON)),
    };
}
function GithubComTakifouhalCrudsqlPkgInternalAuthModelsRoleToJSON(json) {
    return GithubComTakifouhalCrudsqlPkgInternalAuthModelsRoleToJSONTyped(json, false);
}
function GithubComTakifouhalCrudsqlPkgInternalAuthModelsRoleToJSONTyped(value, ignoreDiscriminator) {
    if (ignoreDiscriminator === void 0) { ignoreDiscriminator = false; }
    if (value == null) {
        return value;
    }
    return {
        'created_at': value['createdAt'],
        'description': value['description'],
        'id': value['id'],
        'name': value['name'],
        'permissions': value['permissions'] == null ? undefined : (value['permissions'].map(GithubComTakifouhalCrudsqlPkgInternalAuthModelsPermission_1.GithubComTakifouhalCrudsqlPkgInternalAuthModelsPermissionToJSON)),
        'updated_at': value['updatedAt'],
        'users': value['users'] == null ? undefined : (value['users'].map(GithubComTakifouhalCrudsqlPkgInternalAuthModelsUser_1.GithubComTakifouhalCrudsqlPkgInternalAuthModelsUserToJSON)),
    };
}
