import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyProfileRoutingModule } from './my-profile-routing.module';
import { MyProfileComponent } from './my-profile.component';
import { FormsModule } from '@angular/forms';

// import { LoaderCompComponent } from 'src/app/core/shared/loader-comp/loader-comp.component'
import { NgxSpinnerModule } from "ngx-spinner";

@NgModule({
  declarations: [MyProfileComponent],
  imports: [
    FormsModule,
    CommonModule,
    MyProfileRoutingModule,
    NgxSpinnerModule
  ]
})
export class MyProfileModule { }
