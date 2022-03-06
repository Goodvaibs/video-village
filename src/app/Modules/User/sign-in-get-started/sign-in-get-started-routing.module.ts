import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignInGetStartedComponent } from './sign-in-get-started.component';

const routes: Routes = [
  {
    path:'',
    component:SignInGetStartedComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SignInGetStartedRoutingModule { }
