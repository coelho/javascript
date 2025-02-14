/**
 * Kubernetes
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v1.16.1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { V1ScopeSelector } from './v1ScopeSelector';

/**
* ResourceQuotaSpec defines the desired hard limits to enforce for Quota.
*/
export class V1ResourceQuotaSpec {
    /**
    * hard is the set of desired hard limits for each named resource. More info: https://kubernetes.io/docs/concepts/policy/resource-quotas/
    */
    'hard'?: { [key: string]: string; };
    'scopeSelector'?: V1ScopeSelector;
    /**
    * A collection of filters that must match each object tracked by a quota. If not specified, the quota matches all objects.
    */
    'scopes'?: Array<string>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "hard",
            "baseName": "hard",
            "type": "{ [key: string]: string; }"
        },
        {
            "name": "scopeSelector",
            "baseName": "scopeSelector",
            "type": "V1ScopeSelector"
        },
        {
            "name": "scopes",
            "baseName": "scopes",
            "type": "Array<string>"
        }    ];

    static getAttributeTypeMap() {
        return V1ResourceQuotaSpec.attributeTypeMap;
    }
}

