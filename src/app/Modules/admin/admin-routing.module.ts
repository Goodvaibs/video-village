import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path : '',
    redirectTo : 'login',
    pathMatch : 'full'
  },
  {
    path : 'login',
    loadChildren:() =>
    import('./admin-login/admin-login.module').then(m => m.AdminLoginModule)
  },
  {
    path : 'register',
    loadChildren:() =>
    import('./admin-register/admin-register.module').then(m => m.AdminRegisterModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
