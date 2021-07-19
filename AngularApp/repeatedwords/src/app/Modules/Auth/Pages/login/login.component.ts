import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ErrorHandlerService } from 'src/app/Api/errorhandler.api';


import Swal from 'sweetalert2';
import { Usuario } from '../../Models/usuario.model';
import { UsuarioToken } from '../../Models/usuarioToken.model';
import { AuthService } from '../../Services/auth.service';

import * as CryptoJS from 'crypto-js';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
  ]
})

export class LoginComponent implements OnInit {

  private key = CryptoJS.enc.Utf8.parse('3562489521475643');
  private iv = CryptoJS.enc.Utf8.parse('3562489521475643');

  user: Usuario | undefined;
  userToKen: UsuarioToken | undefined;
  hide: boolean = true;

  public loginForm = this.fb.group({
    usuario: [localStorage.getItem('nombre'), [Validators.required]],
    password: ['', Validators.required],
    remember: [false]
  });

  constructor(private router: Router,
    private fb: FormBuilder,
    private authService: AuthService,
    private errorHandler: ErrorHandlerService,
    protected httpClient: HttpClient
  ) { }

  ngOnInit(): void {

    this.authService.checkService().subscribe(resp => {
      console.log('service available');
    }, error => {
      this.errorHandler.handleError(error);

      Swal.fire({
        icon: 'error',
        title: this.errorHandler.errorTitle,
        text: this.errorHandler.errorMessage,
        footer: this.errorHandler.footerError
      })

      this.router.navigateByUrl('/offline');
    });
  }

  login() {

    let password = this.encrypt(this.loginForm.value.password);

    this.user = new Usuario(
      this.loginForm.value.usuario,
      password
    );

    this.authService.login(this.user).subscribe(resp => {

      this.userToKen = resp;

      if (this.loginForm.get('remember')!.value) {
        localStorage.setItem('usuario', this.loginForm.get('usuario')!.value);
      } else {
        localStorage.removeItem('usuario');
      }

      this.router.navigateByUrl('/');

    }, error => {
      this.errorHandler.handleError(error);

      Swal.fire({
        icon: 'error',
        title: this.errorHandler.errorTitle.toString(),
        text: this.errorHandler.errorMessage,
        footer: this.errorHandler.footerError
      })
    });
  }

  showPassword() {
    this.hide = !this.hide;
  }

  isValidInput(fieldName:any): boolean {
    return this.loginForm.controls[fieldName].invalid && (this.loginForm.controls[fieldName].dirty || this.loginForm.controls[fieldName].touched);
  }

  encrypt(pass: string) {

    var encrypted = CryptoJS.AES.encrypt(CryptoJS.enc.Utf8.parse(pass), this.key, {
      keySize: 128 / 8,
      iv: this.iv,
      mode: CryptoJS.mode.CBC,
      padding: CryptoJS.pad.Pkcs7
    });

    return encrypted.toString();
  }

}
