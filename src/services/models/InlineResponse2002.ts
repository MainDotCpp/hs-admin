/* tslint:disable */
/* eslint-disable */
/**
 * 短链平台
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import {
    Geo,
    GeoFromJSON,
    GeoFromJSONTyped,
    GeoToJSON,
} from './';

/**
 * 
 * @export
 * @interface InlineResponse2002
 */
export interface InlineResponse2002 {
    /**
     * 
     * @type {number}
     * @memberof InlineResponse2002
     */
    code: number;
    /**
     * 
     * @type {Array<Geo>}
     * @memberof InlineResponse2002
     */
    data: Array<Geo>;
    /**
     * 
     * @type {string}
     * @memberof InlineResponse2002
     */
    message: string;
}

export function InlineResponse2002FromJSON(json: any): InlineResponse2002 {
    return InlineResponse2002FromJSONTyped(json, false);
}

export function InlineResponse2002FromJSONTyped(json: any, ignoreDiscriminator: boolean): InlineResponse2002 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'code': json['code'],
        'data': ((json['data'] as Array<any>).map(GeoFromJSON)),
        'message': json['message'],
    };
}

export function InlineResponse2002ToJSON(value?: InlineResponse2002 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'code': value.code,
        'data': ((value.data as Array<any>).map(GeoToJSON)),
        'message': value.message,
    };
}


