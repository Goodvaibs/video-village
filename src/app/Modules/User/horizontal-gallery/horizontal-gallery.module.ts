import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HorizontalGalleryRoutingModule } from './horizontal-gallery-routing.module';
import {FormsModule} from '@angular/forms';
import {HorizontalGalleryComponent} from './horizontal-gallery.component'
@NgModule({
  declarations: [HorizontalGalleryComponent],
  imports: [
    FormsModule,
    CommonModule,
    HorizontalGalleryRoutingModule
  ]
})
export class HorizontalGalleryModule { }
