import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TermsPrivacyRoutingModule } from './terms-privacy-routing.module';
import { TermsPrivacyComponent } from './terms-privacy.component';

//import { LoaderCompComponent } from 'src/app/core/shared/loader-comp/loader-comp.component'
import { NgxSpinnerModule } from "ngx-spinner";

@NgModule({
  declarations: [TermsPrivacyComponent],
  imports: [
    CommonModule,
    TermsPrivacyRoutingModule,
    NgxSpinnerModule
  ]
})
export class TermsPrivacyModule { }
