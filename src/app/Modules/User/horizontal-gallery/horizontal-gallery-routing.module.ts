import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HorizontalGalleryComponent} from './horizontal-gallery.component';
const routes: Routes = [
  {
    path:'',
    component: HorizontalGalleryComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HorizontalGalleryRoutingModule { }
