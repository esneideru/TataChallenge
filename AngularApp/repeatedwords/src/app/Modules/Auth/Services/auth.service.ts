import { Inject, Injectable, Optional } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { API_PATH, BASE_PATH } from '../../../Api/variables.api';
import { Configuration } from '../../../Api/configuration.api';

import { map } from 'rxjs/operators';
import { UsuarioToken } from '../Models/usuarioToken.model';
import { Usuario } from '../Models/usuario.model';



@Injectable({
    providedIn: 'root'
})

export class AuthService {

    protected basePath = API_PATH;
    public defaultHeaders = new HttpHeaders();
    public configuration = new Configuration();

    private currentUserSubject: BehaviorSubject<UsuarioToken>;
    public currentUser: Observable<Usuario>;

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

        this.currentUserSubject = new BehaviorSubject<UsuarioToken>(JSON.parse(localStorage.getItem('currentUser') || '{}'));
        this.currentUser = this.currentUserSubject.asObservable();
    }

    checkService(observe: any = 'body', reportProgress: boolean = false): Observable<any> {
        let url = `${this.basePath}/api/login`;
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

        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json-patch+json',
            'application/json',
            'text/json',
            'application/_*+json'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }

        return this.httpClient.request<any>('get', url,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    public login(body?: Usuario, observe: any = 'body', reportProgress: boolean = false): Observable<any> {

        let url = `${this.basePath}/api/login`;
        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'text/plain',
            'application/json',
            'text/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json-patch+json',
            'application/json',
            'text/json',
            'application/_*+json'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }

        return this.httpClient.post<UsuarioToken>(url, body,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        ).pipe(map(user => {
            let obj: UsuarioToken = JSON.parse(JSON.stringify(user));

            if (obj && obj.token) {
                localStorage.setItem('currentUser', JSON.stringify(user));
                this.currentUserSubject.next(obj);
            }
            return user;
        }));
    }

    public get currentUserValue(): UsuarioToken {
        return this.currentUserSubject.value;
    }

    logout() {
        localStorage.removeItem('currentUser');
        this.currentUserSubject.next({});
    }

    public renovarToken(observe: any = 'body', reportProgress: boolean = false): Observable<any> {

        let url = `${this.basePath}/api/login/renovartoken`;
        let headers = this.defaultHeaders;
        const token = localStorage.getItem('token') || '';

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'text/plain',
            'application/json',
            'text/json',
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        return this.httpClient.post<UsuarioToken>(url, null,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );

    }

}
