import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioToken } from 'src/app/Modules/Auth/Models/usuarioToken.model';
import { AuthService } from 'src/app/Modules/Auth/Services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: [
  ]
})
export class HeaderComponent implements OnInit {

  public currentUser: UsuarioToken | undefined;

  constructor(private authService: AuthService,
    private router: Router) {
    this.authService.currentUser.subscribe(x => this.currentUser = x);
  }

  ngOnInit(): void {
  }

  logout() {
    this.authService.logout();
    this.router.navigateByUrl('/login');
  }

}
