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

import { V1VolumeProjection } from './v1VolumeProjection';

/**
* Represents a projected volume source
*/
export class V1ProjectedVolumeSource {
    /**
    * Mode bits to use on created files by default. Must be a value between 0 and 0777. Directories within the path are not affected by this setting. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set.
    */
    'defaultMode'?: number;
    /**
    * list of volume projections
    */
    'sources': Array<V1VolumeProjection>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "defaultMode",
            "baseName": "defaultMode",
            "type": "number"
        },
        {
            "name": "sources",
            "baseName": "sources",
            "type": "Array<V1VolumeProjection>"
        }    ];

    static getAttributeTypeMap() {
        return V1ProjectedVolumeSource.attributeTypeMap;
    }
}

