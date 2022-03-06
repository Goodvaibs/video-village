import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRegisterRoutingModule } from './admin-register-routing.module';
import { AdminRegisterComponent } from './admin-register.component';


@NgModule({
  declarations: [AdminRegisterComponent],
  imports: [
    CommonModule,
    AdminRegisterRoutingModule
  ]
})
export class AdminRegisterModule { }
