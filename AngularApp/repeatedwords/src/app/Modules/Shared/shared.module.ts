import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './Pages/header/header.component';
import { Page404Component } from './Pages/page404/page404.component';


@NgModule({
  declarations: [
    HeaderComponent,
    Page404Component
  ],
  exports: [
    HeaderComponent,
    Page404Component
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ]
})
export class SharedModule { }
