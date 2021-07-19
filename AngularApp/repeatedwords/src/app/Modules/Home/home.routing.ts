import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { HomeComponent } from './Pages/home/home.component';
import { AuthGuard } from 'src/app/Guards/auth.guard';
import { Role } from '../Auth/Models/Rol.model';

const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        canActivate: [AuthGuard],
        loadChildren: () => import('./childroutes.module').then( m => m.ChildRoutesModule )
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class HomeRoutingModule { }
