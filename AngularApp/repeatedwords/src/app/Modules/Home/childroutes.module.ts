import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RepeatedWordsComponent } from './Pages/repeatedwords/repeatedwords.component';

const childRoutes: Routes = [
    {
        path: 'palabrasrepetidas',
        component: RepeatedWordsComponent,
        data: { titulo: 'palabras' },
    },
]

@NgModule({
    imports: [RouterModule.forChild(childRoutes)],
    exports: [RouterModule]
})
export class ChildRoutesModule { }