import { Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
    providedIn: 'root'
})

export class ErrorHandlerService {
    public errorMessage: string = '';
    public errorTitle: string = 'Ha ocurrido un Error!';
    public footerError: string = '';

    constructor(private router: Router) { }

    public handleError = (error: HttpErrorResponse) => {
        if (error.status === 0) {
            //this.handle0Error();
            this.handleOtherError(error);
        }
        else if (error.status === 400) {
            this.handle400Error(error);
        }else if (error.status === 404) {
            this.handle404Error(error);
        }
        else {
            this.handleOtherError(error);
        }
    }

    private handle0Error = () => {
        this.errorMessage = 'El servicio web no se encuentra disponible';
        this.footerError = 'por favor contacte al administrador del sistema';
    }

    private handle400Error = (error: HttpErrorResponse) => {
        if (error.error.title === 'One or more validation errors occurred.') {
            this.errorTitle = 'Ha ocurrido un error';
            this.errorMessage = 'Verifique que todos los campos esten correctos';
            this.footerError = '';
        }else if(error.error){   
            this.errorTitle = 'Ha ocurrido un error';
            this.errorMessage = error.error;
            this.footerError = ''; 
        } else {
            this.handleOtherError(error);
        }
    }

    private handle500Error = (error: HttpErrorResponse) => {
        this.createErrorMessage(error);
    }

    private handle404Error = (error: HttpErrorResponse) => {

        this.errorTitle = 'No se encuentra disponible';

        if (error.error instanceof ErrorEvent) {
            this.errorMessage = `Error: ${error.error.message}`;
        } else {

            if (error.message) {
                this.errorMessage = error.message;
            } else {
                this.errorMessage = error.error;
            }
        }
    }

    private handleOtherError = (error: HttpErrorResponse) => {
        this.createErrorMessage(error);
    }

    private createErrorMessage = (error: HttpErrorResponse) => {

        if (error.error instanceof ErrorEvent) {
            this.errorMessage = `Error: ${error.error.message}`;
        } else {

            if (error.message) {
                this.errorMessage = error.message;
            } else {
                this.errorMessage = error.error;
            }
            // this.footerError = error.status + ' : ' + error.message;
        }
    }
}