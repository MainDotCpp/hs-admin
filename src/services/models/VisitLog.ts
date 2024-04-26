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
 * @interface VisitLog
 */
export interface VisitLog {
    /**
     * 
     * @type {number}
     * @memberof VisitLog
     */
    id: number;
    /**
     * 
     * @type {string}
     * @memberof VisitLog
     */
    ip: string;
    /**
     * 
     * @type {string}
     * @memberof VisitLog
     */
    no: string;
    /**
     * 
     * @type {string}
     * @memberof VisitLog
     */
    ua: string;
    /**
     * 
     * @type {string}
     * @memberof VisitLog
     */
    lang: string;
    /**
     * 
     * @type {string}
     * @memberof VisitLog
     */
    referer: string;
    /**
     * 
     * @type {string}
     * @memberof VisitLog
     */
    visit_time: string;
    /**
     * 
     * @type {number}
     * @memberof VisitLog
     */
    status: number;
    /**
     * 
     * @type {string}
     * @memberof VisitLog
     */
    isp: string;
    /**
     * 
     * @type {string}
     * @memberof VisitLog
     */
    organization: string;
    /**
     * 
     * @type {string}
     * @memberof VisitLog
     */
    country: string;
    /**
     * 
     * @type {number}
     * @memberof VisitLog
     */
    longitude: number;
    /**
     * 
     * @type {number}
     * @memberof VisitLog
     */
    latitude: number;
    /**
     * 
     * @type {string}
     * @memberof VisitLog
     */
    continent_code: string;
    /**
     * 
     * @type {string}
     * @memberof VisitLog
     */
    country_code: string;
    /**
     * 
     * @type {string}
     * @memberof VisitLog
     */
    cloak_response: string;
}

export function VisitLogFromJSON(json: any): VisitLog {
    return VisitLogFromJSONTyped(json, false);
}

export function VisitLogFromJSONTyped(json: any, ignoreDiscriminator: boolean): VisitLog {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'ip': json['ip'],
        'no': json['no'],
        'ua': json['ua'],
        'lang': json['lang'],
        'referer': json['referer'],
        'visit_time': json['visit_time'],
        'status': json['status'],
        'isp': json['isp'],
        'organization': json['organization'],
        'country': json['country'],
        'longitude': json['longitude'],
        'latitude': json['latitude'],
        'continent_code': json['continent_code'],
        'country_code': json['country_code'],
        'cloak_response': json['cloak_response'],
    };
}

export function VisitLogToJSON(value?: VisitLog | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'ip': value.ip,
        'no': value.no,
        'ua': value.ua,
        'lang': value.lang,
        'referer': value.referer,
        'visit_time': value.visit_time,
        'status': value.status,
        'isp': value.isp,
        'organization': value.organization,
        'country': value.country,
        'longitude': value.longitude,
        'latitude': value.latitude,
        'continent_code': value.continent_code,
        'country_code': value.country_code,
        'cloak_response': value.cloak_response,
    };
}


