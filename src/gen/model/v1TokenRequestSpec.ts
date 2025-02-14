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

import { V1BoundObjectReference } from './v1BoundObjectReference';

/**
* TokenRequestSpec contains client provided parameters of a token request.
*/
export class V1TokenRequestSpec {
    /**
    * Audiences are the intendend audiences of the token. A recipient of a token must identitfy themself with an identifier in the list of audiences of the token, and otherwise should reject the token. A token issued for multiple audiences may be used to authenticate against any of the audiences listed but implies a high degree of trust between the target audiences.
    */
    'audiences': Array<string>;
    'boundObjectRef'?: V1BoundObjectReference;
    /**
    * ExpirationSeconds is the requested duration of validity of the request. The token issuer may return a token with a different validity duration so a client needs to check the \'expiration\' field in a response.
    */
    'expirationSeconds'?: number;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "audiences",
            "baseName": "audiences",
            "type": "Array<string>"
        },
        {
            "name": "boundObjectRef",
            "baseName": "boundObjectRef",
            "type": "V1BoundObjectReference"
        },
        {
            "name": "expirationSeconds",
            "baseName": "expirationSeconds",
            "type": "number"
        }    ];

    static getAttributeTypeMap() {
        return V1TokenRequestSpec.attributeTypeMap;
    }
}

