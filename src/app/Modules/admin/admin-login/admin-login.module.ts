import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminLoginComponent } from './admin-login.component';
import {AdminLoginRoutingModule} from './admin-login-routing.module'




@NgModule({
  declarations: [AdminLoginComponent],
  imports: [
    CommonModule,
    AdminLoginRoutingModule
  ]
})
export class AdminLoginModule { }
