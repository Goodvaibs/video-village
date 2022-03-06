import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SeriesRoutingModule } from './series-routing.module';
import { SeriesComponent } from './series.component';

import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';

// import { LoaderCompComponent } from 'src/app/core/shared/loader-comp/loader-comp.component'
import { NgxSpinnerModule } from "ngx-spinner";

@NgModule({
  declarations: [SeriesComponent],
  imports: [
    CommonModule,
    SeriesRoutingModule,
    NgxSkeletonLoaderModule,
    NgxSpinnerModule
  ]
})
export class SeriesModule { }
