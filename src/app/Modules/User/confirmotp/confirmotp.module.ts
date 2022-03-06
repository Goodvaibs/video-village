import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConfirmotpRoutingModule } from './confirmotp-routing.module';
import { ConfirmotpComponent } from './confirmotp.component';

import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [ConfirmotpComponent],
  imports: [
    CommonModule,
    ConfirmotpRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class ConfirmotpModule { }
