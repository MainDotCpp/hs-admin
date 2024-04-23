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
/**
 * 
 * @export
 * @interface Geo
 */
export interface Geo {
    /**
     * 
     * @type {number}
     * @memberof Geo
     */
    id: number;
    /**
     * 
     * @type {number}
     * @memberof Geo
     */
    code: number;
    /**
     * 
     * @type {string}
     * @memberof Geo
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof Geo
     */
    en: string;
    /**
     * 
     * @type {string}
     * @memberof Geo
     */
    iso: string;
    /**
     * 
     * @type {string}
     * @memberof Geo
     */
    icon: string;
}

export function GeoFromJSON(json: any): Geo {
    return GeoFromJSONTyped(json, false);
}

export function GeoFromJSONTyped(json: any, ignoreDiscriminator: boolean): Geo {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'code': json['code'],
        'name': json['name'],
        'en': json['en'],
        'iso': json['iso'],
        'icon': json['icon'],
    };
}

export function GeoToJSON(value?: Geo | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'code': value.code,
        'name': value.name,
        'en': value.en,
        'iso': value.iso,
        'icon': value.icon,
    };
}


