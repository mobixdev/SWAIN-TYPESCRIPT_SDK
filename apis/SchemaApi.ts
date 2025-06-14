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


import * as runtime from '../runtime';
import type {
  ApiErrorResponse,
  ApiModelSchema,
  ApiModelsResponse,
} from '../models/index';
import {
    ApiErrorResponseFromJSON,
    ApiErrorResponseToJSON,
    ApiModelSchemaFromJSON,
    ApiModelSchemaToJSON,
    ApiModelsResponseFromJSON,
    ApiModelsResponseToJSON,
} from '../models/index';

export interface ModelSchemaGetRequest {
    model: string;
}

/**
 * 
 */
export class SchemaApi extends runtime.BaseAPI {

    /**
     * Returns the schema information for a specific model including fields and relationships
     * Get model schema
     */
    async modelSchemaGetRaw(requestParameters: ModelSchemaGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ApiModelSchema>> {
        if (requestParameters['model'] == null) {
            throw new runtime.RequiredError(
                'model',
                'Required parameter "model" was null or undefined when calling modelSchemaGet().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/{model}/schema`.replace(`{${"model"}}`, encodeURIComponent(String(requestParameters['model']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ApiModelSchemaFromJSON(jsonValue));
    }

    /**
     * Returns the schema information for a specific model including fields and relationships
     * Get model schema
     */
    async modelSchemaGet(requestParameters: ModelSchemaGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ApiModelSchema> {
        const response = await this.modelSchemaGetRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Returns a list of all registered models and their table names
     * List all available models
     */
    async modelsGetRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ApiModelsResponse>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/models`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ApiModelsResponseFromJSON(jsonValue));
    }

    /**
     * Returns a list of all registered models and their table names
     * List all available models
     */
    async modelsGet(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ApiModelsResponse> {
        const response = await this.modelsGetRaw(initOverrides);
        return await response.value();
    }

}
