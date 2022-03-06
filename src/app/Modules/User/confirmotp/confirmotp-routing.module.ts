import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConfirmotpComponent } from './confirmotp.component';

const routes: Routes = [{
  path: '',
  component: ConfirmotpComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConfirmotpRoutingModule { }
