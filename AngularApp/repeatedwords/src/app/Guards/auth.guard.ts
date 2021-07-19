import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

import { UsuarioToken } from '../Modules/Auth/Models/usuarioToken.model';
import { AuthService } from '../Modules/Auth/Services/auth.service';

@Injectable({
    providedIn: 'root'
})

export class AuthGuard implements CanActivate {

    userToken: UsuarioToken | undefined;

    constructor(private authService: AuthService,
        private router: Router) { }

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot) {

        const currentUser = this.authService.currentUserValue;

        if (currentUser) {
            let date = new Date();
            let userExpiration = currentUser.expiracion;
            let userDate = new Date(userExpiration!); 

            if (userDate != undefined && userDate > date) {
                return true;
            }

            return false;
        }

        this.router.navigateByUrl('/login');
        return false;
    }

}
