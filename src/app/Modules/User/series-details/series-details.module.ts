import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SeriesDetailsRoutingModule } from './series-details-routing.module';
import { SeriesDetailsComponent } from './series-details.component';
import { FormsModule } from '@angular/forms';
import { VideojsComponent } from '../../../core/shared/videojs/videojs.component';
import { VideoPlayerComponent } from '../../../core/shared/video-player/video-player.component';

//videogular
import {VgCoreModule} from '@videogular/ngx-videogular/core';
import {VgControlsModule} from '@videogular/ngx-videogular/controls';
import {VgOverlayPlayModule} from '@videogular/ngx-videogular/overlay-play';
import {VgBufferingModule} from '@videogular/ngx-videogular/buffering';
import { VgStreamingModule } from '@videogular/ngx-videogular/streaming';

import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';

// import { LoaderCompComponent } from 'src/app/core/shared/loader-comp/loader-comp.component'
import { NgxSpinnerModule } from "ngx-spinner";

@NgModule({
  declarations: [SeriesDetailsComponent, VideojsComponent, VideoPlayerComponent],
  imports: [
    FormsModule,
    CommonModule,
    SeriesDetailsRoutingModule,
    VgCoreModule,
    VgControlsModule,
    VgOverlayPlayModule,
    VgBufferingModule,
    VgStreamingModule,
    NgxSkeletonLoaderModule,
    NgxSpinnerModule
  ]
})
export class SeriesDetailsModule { }
