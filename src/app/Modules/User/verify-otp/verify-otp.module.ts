import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VerifyOtpRoutingModule } from './verify-otp-routing.module';
import { VerifyOtpComponent } from './verify-otp.component';
import { ReactiveFormsModule } from '@angular/forms';

//import { LoaderCompComponent } from 'src/app/core/shared/loader-comp/loader-comp.component'
import { NgxSpinnerModule } from "ngx-spinner";

@NgModule({
  declarations: [ VerifyOtpComponent ],
  imports: [
    CommonModule,
    VerifyOtpRoutingModule,
    ReactiveFormsModule,
    NgxSpinnerModule
  ]
})
export class VerifyOtpModule { }
