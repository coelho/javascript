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

import { V1beta2RollingUpdateDeployment } from './v1beta2RollingUpdateDeployment';

/**
* DeploymentStrategy describes how to replace existing pods with new ones.
*/
export class V1beta2DeploymentStrategy {
    'rollingUpdate'?: V1beta2RollingUpdateDeployment;
    /**
    * Type of deployment. Can be \"Recreate\" or \"RollingUpdate\". Default is RollingUpdate.
    */
    'type'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "rollingUpdate",
            "baseName": "rollingUpdate",
            "type": "V1beta2RollingUpdateDeployment"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return V1beta2DeploymentStrategy.attributeTypeMap;
    }
}

