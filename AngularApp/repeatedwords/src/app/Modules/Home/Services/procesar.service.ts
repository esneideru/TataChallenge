import { Inject, Injectable, Optional } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { API_PATH, BASE_PATH } from 'src/app/Api/variables.api';
import { Configuration } from 'src/app/Api/configuration.api';
import { TextoDTO } from '../Models/textoDTO.model';
import { Texto } from '../Models/texto.model';

@Injectable({
    providedIn: 'root'
})

export class ProcesarService {

    protected basePath = API_PATH;
    public defaultHeaders = new HttpHeaders();
    public configuration = new Configuration();

    constructor(protected httpClient: HttpClient
        , @Optional() @Inject(BASE_PATH) basePath: string
        , @Optional() configuration: Configuration) {

        if (basePath) {
            this.basePath = basePath;
        }
        if (configuration) {
            this.configuration = configuration;
            this.basePath = basePath || configuration.basePath || this.basePath;
        }
    }

    procesar(body?: TextoDTO, observe: any = 'body', reportProgress: boolean = true) {

        const url = `${this.basePath}/api/repeatedwords`;
        let headers = this.defaultHeaders;

        let httpHeaderAccepts: string[] = [
            'text/plain',
            'application/json',
            'text/json'
        ];

        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        const consumes: string[] = [
            'application/json',
            'text/json',
            'application/_*+json'
        ];

        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }

        return this.httpClient.request<Texto>('post', url,
            {
                body: body,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }




}
