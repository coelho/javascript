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

import { ExtensionsV1beta1HTTPIngressPath } from './extensionsV1beta1HTTPIngressPath';

/**
* HTTPIngressRuleValue is a list of http selectors pointing to backends. In the example: http://<host>/<path>?<searchpart> -> backend where where parts of the url correspond to RFC 3986, this resource will be used to match against everything after the last \'/\' and before the first \'?\' or \'#\'.
*/
export class ExtensionsV1beta1HTTPIngressRuleValue {
    /**
    * A collection of paths that map requests to backends.
    */
    'paths': Array<ExtensionsV1beta1HTTPIngressPath>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "paths",
            "baseName": "paths",
            "type": "Array<ExtensionsV1beta1HTTPIngressPath>"
        }    ];

    static getAttributeTypeMap() {
        return ExtensionsV1beta1HTTPIngressRuleValue.attributeTypeMap;
    }
}

