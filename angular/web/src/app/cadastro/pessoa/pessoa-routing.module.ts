import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PessoaComponent } from './pessoa.component';

const routes: Routes = [
  {
    path: '', component: PessoaComponent, children: [
      { path: 'filtro', loadChildren: () => import('./filtro/filtro.module').then(m => m.FiltroModule) },
      { path: 'novo', loadChildren: () => import('./form/form.module').then(m => m.FormModule) },
      { path: ':id/edit', loadChildren: () => import('./form/form.module').then(m => m.FormModule) },
      { path: ':id', loadChildren: () => import('./form/form.module').then(m => m.FormModule) },
      { path: '', loadChildren: () => import('./list/list.module').then(m => m.ListModule) },
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PessoaRoutingModule { }
