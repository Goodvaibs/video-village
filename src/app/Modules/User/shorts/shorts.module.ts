import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShortsRoutingModule } from './shorts-routing.module';
import { ShortsComponent } from './shorts.component';

// import { LoaderCompComponent } from 'src/app/core/shared/loader-comp/loader-comp.component'
import { NgxSpinnerModule } from "ngx-spinner";

@NgModule({
  declarations: [ShortsComponent],
  imports: [
    CommonModule,
    ShortsRoutingModule,
    NgxSpinnerModule
  ]
})
export class ShortsModule { }
