import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { LoginComponent } from './Pages/login/login.component';
import { MantenimientoComponent } from './Pages/mantenimiento/mantenimiento.component';


const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'offline', component: MantenimientoComponent },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AuthRoutingModule {}
