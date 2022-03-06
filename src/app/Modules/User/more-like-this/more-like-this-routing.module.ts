import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MoreLikeThisComponent } from './more-like-this.component';

const routes: Routes = [
  {
    path: '',
    component: MoreLikeThisComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MoreLikeThisRoutingModule { }
