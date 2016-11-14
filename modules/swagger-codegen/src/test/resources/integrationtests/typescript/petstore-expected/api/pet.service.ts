/**
 * Swagger Petstore
 * This is a sample server Petstore server.  You can find out more about Swagger at [http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).  For this sample, you can use the api key `special-key` to test the authorization filters.
 *
 * OpenAPI spec version: 1.0.0
 * Contact: apiteam@swagger.io
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { Inject, Injectable, Optional }                      from '@angular/core';
import { Http, Headers, URLSearchParams }                    from '@angular/http';
import { RequestMethod, RequestOptions, RequestOptionsArgs } from '@angular/http';
import { Response, ResponseContentType }                     from '@angular/http';

import { Observable }                                        from 'rxjs/Observable';
import '../rxjs-operators';

import { Pet } from '../model/pet';
import { ApiResponse } from '../model/apiResponse';

import { BASE_PATH }                                         from '../variables';
import { Configuration }                                     from '../configuration';

/* tslint:disable:no-unused-variable member-ordering */


@Injectable()
export class PetService {
    protected basePath = 'http://petstore.swagger.io/v2';
    public defaultHeaders: Headers = new Headers();
    public configuration: Configuration = new Configuration();

    constructor(protected http: Http, @Optional()@Inject(BASE_PATH) basePath: string, @Optional() configuration: Configuration) {
        if (basePath) {
            this.basePath = basePath;
        }
        if (configuration) {
            this.configuration = configuration;
			this.basePath = basePath || configuration.basePath || this.basePath;
        }
    }

    /**
     * Add a new pet to the store
     * 
     * @param body Pet object that needs to be added to the store
     */
    public addPet(body: Pet, extraHttpRequestParams?: any): Observable<{}> {
        return this.addPetWithHttpInfo(body, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json();
                }
            });
    }

    /**
     * Deletes a pet
     * 
     * @param petId Pet id to delete
     * @param apiKey 
     */
    public deletePet(petId: number, apiKey?: string, extraHttpRequestParams?: any): Observable<{}> {
        return this.deletePetWithHttpInfo(petId, apiKey, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json();
                }
            });
    }

    /**
     * Finds Pets by status
     * Multiple status values can be provided with comma separated strings
     * @param status Status values that need to be considered for filter
     */
    public findPetsByStatus(status: Array<string>, extraHttpRequestParams?: any): Observable<Array<Pet>> {
        return this.findPetsByStatusWithHttpInfo(status, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json();
                }
            });
    }

    /**
     * Finds Pets by tags
     * Multiple tags can be provided with comma separated strings. Use tag1, tag2, tag3 for testing.
     * @param tags Tags to filter by
     */
    public findPetsByTags(tags: Array<string>, extraHttpRequestParams?: any): Observable<Array<Pet>> {
        return this.findPetsByTagsWithHttpInfo(tags, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json();
                }
            });
    }

    /**
     * Find pet by ID
     * Returns a single pet
     * @param petId ID of pet to return
     */
    public getPetById(petId: number, extraHttpRequestParams?: any): Observable<Pet> {
        return this.getPetByIdWithHttpInfo(petId, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json();
                }
            });
    }

    /**
     * Update an existing pet
     * 
     * @param body Pet object that needs to be added to the store
     */
    public updatePet(body: Pet, extraHttpRequestParams?: any): Observable<{}> {
        return this.updatePetWithHttpInfo(body, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json();
                }
            });
    }

    /**
     * Updates a pet in the store with form data
     * 
     * @param petId ID of pet that needs to be updated
     * @param name Updated name of the pet
     * @param status Updated status of the pet
     */
    public updatePetWithForm(petId: number, name?: string, status?: string, extraHttpRequestParams?: any): Observable<{}> {
        return this.updatePetWithFormWithHttpInfo(petId, name, status, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json();
                }
            });
    }

    /**
     * uploads an image
     * 
     * @param petId ID of pet to update
     * @param additionalMetadata Additional data to pass to server
     * @param file file to upload
     */
    public uploadFile(petId: number, additionalMetadata?: string, file?: any, extraHttpRequestParams?: any): Observable<ApiResponse> {
        return this.uploadFileWithHttpInfo(petId, additionalMetadata, file, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json();
                }
            });
    }


    /**
     * Add a new pet to the store
     * 
     * @param body Pet object that needs to be added to the store
     */
    public addPetWithHttpInfo(body: Pet, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + `/pet`;

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'body' is not null or undefined
        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling addPet.');
        }


        // to determine the Content-Type header
        let consumes: string[] = [
            'application/json', 
            'application/xml'
        ];

        // to determine the Accept header
        let produces: string[] = [
            'application/xml', 
            'application/json'
        ];
        
        // authentication (petstore_auth) required
        // oauth required
        if (this.configuration.accessToken)
        {
            headers.set('Authorization', 'Bearer ' + this.configuration.accessToken);
        }
            

        headers.set('Content-Type', 'application/json');


        let requestOptions: RequestOptionsArgs = new RequestOptions({
            method: RequestMethod.Post,
            headers: headers,
            body: body == null ? '' : JSON.stringify(body), // https://github.com/angular/angular/issues/10612
            search: queryParameters,
            responseType: ResponseContentType.Json
        });

        return this.http.request(path, requestOptions);
    }

    /**
     * Deletes a pet
     * 
     * @param petId Pet id to delete
     * @param apiKey 
     */
    public deletePetWithHttpInfo(petId: number, apiKey?: string, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + `/pet/${petId}`;

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'petId' is not null or undefined
        if (petId === null || petId === undefined) {
            throw new Error('Required parameter petId was null or undefined when calling deletePet.');
        }


        // to determine the Content-Type header
        let consumes: string[] = [
        ];

        // to determine the Accept header
        let produces: string[] = [
            'application/xml', 
            'application/json'
        ];
        
        // authentication (petstore_auth) required
        // oauth required
        if (this.configuration.accessToken)
        {
            headers.set('Authorization', 'Bearer ' + this.configuration.accessToken);
        }
            



        let requestOptions: RequestOptionsArgs = new RequestOptions({
            method: RequestMethod.Delete,
            headers: headers,
            search: queryParameters,
            responseType: ResponseContentType.Json
        });

        return this.http.request(path, requestOptions);
    }

    /**
     * Finds Pets by status
     * Multiple status values can be provided with comma separated strings
     * @param status Status values that need to be considered for filter
     */
    public findPetsByStatusWithHttpInfo(status: Array<string>, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + `/pet/findByStatus`;

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'status' is not null or undefined
        if (status === null || status === undefined) {
            throw new Error('Required parameter status was null or undefined when calling findPetsByStatus.');
        }
        if (status !== undefined) {
            queryParameters.set('status', <any>status);
        }


        // to determine the Content-Type header
        let consumes: string[] = [
        ];

        // to determine the Accept header
        let produces: string[] = [
            'application/xml', 
            'application/json'
        ];
        
        // authentication (petstore_auth) required
        // oauth required
        if (this.configuration.accessToken)
        {
            headers.set('Authorization', 'Bearer ' + this.configuration.accessToken);
        }
            



        let requestOptions: RequestOptionsArgs = new RequestOptions({
            method: RequestMethod.Get,
            headers: headers,
            search: queryParameters,
            responseType: ResponseContentType.Json
        });

        return this.http.request(path, requestOptions);
    }

    /**
     * Finds Pets by tags
     * Multiple tags can be provided with comma separated strings. Use tag1, tag2, tag3 for testing.
     * @param tags Tags to filter by
     */
    public findPetsByTagsWithHttpInfo(tags: Array<string>, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + `/pet/findByTags`;

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'tags' is not null or undefined
        if (tags === null || tags === undefined) {
            throw new Error('Required parameter tags was null or undefined when calling findPetsByTags.');
        }
        if (tags !== undefined) {
            queryParameters.set('tags', <any>tags);
        }


        // to determine the Content-Type header
        let consumes: string[] = [
        ];

        // to determine the Accept header
        let produces: string[] = [
            'application/xml', 
            'application/json'
        ];
        
        // authentication (petstore_auth) required
        // oauth required
        if (this.configuration.accessToken)
        {
            headers.set('Authorization', 'Bearer ' + this.configuration.accessToken);
        }
            



        let requestOptions: RequestOptionsArgs = new RequestOptions({
            method: RequestMethod.Get,
            headers: headers,
            search: queryParameters,
            responseType: ResponseContentType.Json
        });

        return this.http.request(path, requestOptions);
    }

    /**
     * Find pet by ID
     * Returns a single pet
     * @param petId ID of pet to return
     */
    public getPetByIdWithHttpInfo(petId: number, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + `/pet/${petId}`;

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'petId' is not null or undefined
        if (petId === null || petId === undefined) {
            throw new Error('Required parameter petId was null or undefined when calling getPetById.');
        }


        // to determine the Content-Type header
        let consumes: string[] = [
        ];

        // to determine the Accept header
        let produces: string[] = [
            'application/xml', 
            'application/json'
        ];
        
        // authentication (api_key) required
        if (this.configuration.apiKey)
        {
            headers.set('api_key', this.configuration.apiKey);
        }
            



        let requestOptions: RequestOptionsArgs = new RequestOptions({
            method: RequestMethod.Get,
            headers: headers,
            search: queryParameters,
            responseType: ResponseContentType.Json
        });

        return this.http.request(path, requestOptions);
    }

    /**
     * Update an existing pet
     * 
     * @param body Pet object that needs to be added to the store
     */
    public updatePetWithHttpInfo(body: Pet, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + `/pet`;

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'body' is not null or undefined
        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling updatePet.');
        }


        // to determine the Content-Type header
        let consumes: string[] = [
            'application/json', 
            'application/xml'
        ];

        // to determine the Accept header
        let produces: string[] = [
            'application/xml', 
            'application/json'
        ];
        
        // authentication (petstore_auth) required
        // oauth required
        if (this.configuration.accessToken)
        {
            headers.set('Authorization', 'Bearer ' + this.configuration.accessToken);
        }
            

        headers.set('Content-Type', 'application/json');


        let requestOptions: RequestOptionsArgs = new RequestOptions({
            method: RequestMethod.Put,
            headers: headers,
            body: body == null ? '' : JSON.stringify(body), // https://github.com/angular/angular/issues/10612
            search: queryParameters,
            responseType: ResponseContentType.Json
        });

        return this.http.request(path, requestOptions);
    }

    /**
     * Updates a pet in the store with form data
     * 
     * @param petId ID of pet that needs to be updated
     * @param name Updated name of the pet
     * @param status Updated status of the pet
     */
    public updatePetWithFormWithHttpInfo(petId: number, name?: string, status?: string, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + `/pet/${petId}`;

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        let formParams = new URLSearchParams();

        // verify required parameter 'petId' is not null or undefined
        if (petId === null || petId === undefined) {
            throw new Error('Required parameter petId was null or undefined when calling updatePetWithForm.');
        }


        // to determine the Content-Type header
        let consumes: string[] = [
            'application/x-www-form-urlencoded'
        ];

        // to determine the Accept header
        let produces: string[] = [
            'application/xml', 
            'application/json'
        ];
        
        // authentication (petstore_auth) required
        // oauth required
        if (this.configuration.accessToken)
        {
            headers.set('Authorization', 'Bearer ' + this.configuration.accessToken);
        }
            
        headers.set('Content-Type', 'application/x-www-form-urlencoded');


        if (name !== undefined) {
            formParams.set('name', <any>name); 
        }
        if (status !== undefined) {
            formParams.set('status', <any>status); 
        }

        let requestOptions: RequestOptionsArgs = new RequestOptions({
            method: RequestMethod.Post,
            headers: headers,
            body: formParams.toString(),
            search: queryParameters,
            responseType: ResponseContentType.Json
        });

        return this.http.request(path, requestOptions);
    }

    /**
     * uploads an image
     * 
     * @param petId ID of pet to update
     * @param additionalMetadata Additional data to pass to server
     * @param file file to upload
     */
    public uploadFileWithHttpInfo(petId: number, additionalMetadata?: string, file?: any, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + `/pet/${petId}/uploadImage`;

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        let formParams = new URLSearchParams();

        // verify required parameter 'petId' is not null or undefined
        if (petId === null || petId === undefined) {
            throw new Error('Required parameter petId was null or undefined when calling uploadFile.');
        }


        // to determine the Content-Type header
        let consumes: string[] = [
            'multipart/form-data'
        ];

        // to determine the Accept header
        let produces: string[] = [
            'application/json'
        ];
        
        // authentication (petstore_auth) required
        // oauth required
        if (this.configuration.accessToken)
        {
            headers.set('Authorization', 'Bearer ' + this.configuration.accessToken);
        }
            
        headers.set('Content-Type', 'application/x-www-form-urlencoded');


        if (additionalMetadata !== undefined) {
            formParams.set('additionalMetadata', <any>additionalMetadata); 
        }
        if (file !== undefined) {
            formParams.set('file', <any>file); 
        }

        let requestOptions: RequestOptionsArgs = new RequestOptions({
            method: RequestMethod.Post,
            headers: headers,
            body: formParams.toString(),
            search: queryParameters,
            responseType: ResponseContentType.Json
        });

        return this.http.request(path, requestOptions);
    }

}
