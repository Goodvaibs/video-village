import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SubscriptionRoutingModule } from './subscription-routing.module';
import { SubscriptionComponent } from './subscription.component';

// import { LoaderCompComponent } from 'src/app/core/shared/loader-comp/loader-comp.component'
import { NgxSpinnerModule } from "ngx-spinner";

@NgModule({
  declarations: [SubscriptionComponent],
  imports: [
    CommonModule,
    SubscriptionRoutingModule,
    NgxSpinnerModule
  ]
})
export class SubscriptionModule { }
