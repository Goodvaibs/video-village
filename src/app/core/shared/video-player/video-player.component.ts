import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.scss']
})
export class VideoPlayerComponent implements OnInit {

  @Input() videoDeatils;
  constructor() { }

  ngOnInit(): void {
    console.log(this.videoDeatils);
  }

  hlsBitrates(rate) {
    console.log(rate);
   }

}
