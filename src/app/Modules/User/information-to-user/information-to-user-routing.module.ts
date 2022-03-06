import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InformationToUserModule } from './information-to-user.module';
import {InformationToUserComponent} from './information-to-user.component';
const routes: Routes = [
  {
    path: '',
    component: InformationToUserComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InformationToUserRoutingModule { }
