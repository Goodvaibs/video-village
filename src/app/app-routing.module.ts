import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoaderCompComponent } from './core/shared/loader-comp/loader-comp.component';

const routes: Routes = [
  {
    path: 'admin',
    loadChildren: () =>
      import('./Modules/admin/admin.module').then(m => m.AdminModule)
  },
  {
    path: '',
    loadChildren: () =>
      import('./Modules/User/user.module').then(m => m.UserModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
