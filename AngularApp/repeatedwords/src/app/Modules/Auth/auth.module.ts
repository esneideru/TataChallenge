import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { LoginComponent } from '../Auth/Pages/login/login.component';
import { MantenimientoComponent } from './Pages/mantenimiento/mantenimiento.component';

@NgModule({
  declarations: [
    LoginComponent,
    MantenimientoComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  exports: [
    LoginComponent,
    MantenimientoComponent,
  ],

})
export class AuthModule { }