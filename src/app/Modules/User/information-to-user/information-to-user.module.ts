import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InformationToUserRoutingModule } from './information-to-user-routing.module';
import {InformationToUserComponent} from './information-to-user.component';

@NgModule({
  declarations: [InformationToUserComponent],
  imports: [
    CommonModule,
    InformationToUserRoutingModule
  ]
})
export class InformationToUserModule { }
