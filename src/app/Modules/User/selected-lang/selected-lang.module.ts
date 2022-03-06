import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SelectedLangRoutingModule } from './selected-lang-routing.module';

// import { LoaderCompComponent } from 'src/app/core/shared/loader-comp/loader-comp.component'
import { NgxSpinnerModule } from "ngx-spinner";

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SelectedLangRoutingModule,
    NgxSpinnerModule
  ]
})
export class SelectedLangModule { }
