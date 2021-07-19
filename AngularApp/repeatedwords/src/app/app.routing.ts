import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthRoutingModule } from './Modules/Auth/auth.routing';
import { HomeRoutingModule } from './Modules/Home/home.routing';
import { Page404Component } from './Modules/Shared/Pages/page404/page404.component';
import { SharedModule } from './Modules/Shared/shared.module';



const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '**', component: Page404Component },
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, { initialNavigation: 'enabled' }),
        AuthRoutingModule,
        HomeRoutingModule,
        SharedModule
    ],
    exports: [RouterModule]
})
export class AppRoutingModule { }