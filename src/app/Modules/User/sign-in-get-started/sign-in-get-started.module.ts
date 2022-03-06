import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SignInGetStartedRoutingModule } from './sign-in-get-started-routing.module';

// import { LoaderCompComponent } from 'src/app/core/shared/loader-comp/loader-comp.component'
import { NgxSpinnerModule } from "ngx-spinner";

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SignInGetStartedRoutingModule,
    NgxSpinnerModule
  ]
})
export class SignInGetStartedModule { }
