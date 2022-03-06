import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MoreLikeThisRoutingModule } from './more-like-this-routing.module';
import { MoreLikeThisComponent } from './more-like-this.component';

import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';

// import { LoaderCompComponent } from 'src/app/core/shared/loader-comp/loader-comp.component'
// import { NgxSpinnerModule } from "ngx-spinner";


@NgModule({
  declarations: [MoreLikeThisComponent],
  imports: [
    CommonModule,
    MoreLikeThisRoutingModule,
    NgxSkeletonLoaderModule,
    // NgxSpinnerModule
  ]
})
export class MoreLikeThisModule { }
