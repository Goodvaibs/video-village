import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AdminRegisterComponent} from './admin-register.component'

const routes: Routes = [
  {
    path : '',
    component : AdminRegisterComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRegisterRoutingModule { }
