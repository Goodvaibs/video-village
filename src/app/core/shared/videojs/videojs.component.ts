import { Component, ElementRef, Input, OnDestroy, OnInit, ViewChild, ViewEncapsulation, AfterViewInit } from '@angular/core';
import videojs from 'video.js';

@Component({
  selector: 'app-videojs',
  templateUrl: './videojs.component.html',
  styleUrls: ['./videojs.component.scss']
})
export class VideojsComponent implements OnInit {

  @Input() playUrl: string;
  seekbarTracker: any = {
    duration: 0,
    time: 0,
    seekPercent: 0,
    hasDVR: false,
  };

  seekTime: number;

  // declare player var
  private player: any;

  url = "https://d2s5cesslnh4wz.cloudfront.net/8ff339672a374e1aa9346b95a7a46aa6001/hls1/master_med.m3u8?Expires=1601243679&Signature=X4F1NBuJVAy-tzqfDRt~8zxKOI1A92MMazYNCKZplgT0LYCl9eSU-nZ82VakiecbdVtskT9GcRhmkBpzY2e2ConMr~8hvFI~30cgvD6YX1mpZvTmFRnK6WxibBnspTcxTI4WBeDwM8UwlWWXHG7g~ADEw7aMmtfLESa7brKOqaIU8mwBgnjFREzuTLi7PvjPizKTgCKlIPQocVS9B1FOWycuBWRkJulVZD7aYuqnyqXyU7STkcKem613us7DuFm4r3bVqhO0LeKn6xwRHMwLaDQLVr6iE2rdeX07lmaZCrW8FhymcFXpvuyrdjbPrhsOLHraa0VLf2Ns~2SUyj2Lwg__&Key-Pair-Id=APKAIKKEJUUNH5EV374Q";
  constructor() {
   this.player = false;
  }

  ngOnInit(): void {
  }

  // video js code
  ngAfterViewInit() {
    const self = this;
    this.player = videojs(document.getElementById('sxmvideo'), {}, function() {   // here videojs is undefined.
      this.play();
    });
    console.log(this.player);
    this.player.muted(true);
    this.player.on('timeupdate', () => {
      let hasDVR = false;
      let duration = Math.floor(this.getDuration(this.player) * 1000);
      let time;
      let seekPercent;
      this.player.controls(true);
      console.log(this.player.currentTime(), this.getDuration(this.player));

      // if(duration) {
      //   this.seekbarTracker.duration = duration;

      //   // constrain time
      //   time = Math.floor(Math.max(0, Math.min(duration, this.player.currentTime() * 1000)));
      //   this.seekbarTracker.time = time;
      //   seekPercent = time / duration;
      //   if(seekPercent !== this.seekbarTracker.seekPercent) {
      //     this.onSeekPercentChange(this.player, seekPercent, duration);
      //   }
      //   this.seekbarTracker.seekPercent = seekPercent;

      //   // duration is not Infinity, so if isLive() returns true, then player should have DVR.
      //   hasDVR = this.isLive();
      // }

      // this.seekbarTracker.hasDVR = hasDVR;
    });
  }

  getDuration(player) {
    var seekable = player.seekable();
    return seekable && seekable.length ? seekable.end(0) - seekable.start(0) : 0;
  }

  onSeekPercentChange(player, seekPercent, duration) {
    var seekable = player.seekable();

    if (seekable && seekable.length) {
      // constrain currentTime
      player.currentTime(Math.max(0, Math.min(seekable.end(0), seekable.start(0) + (seekPercent * duration))));
    }
  }

  isLive() {
    if (!isFinite(this.player.duration())) {
      return true;
    }

    var acceptableDelay = 30;
    var seekable = this.player.seekable();
    return seekable && seekable.length && seekable.end(0) - this.player.currentTime() < acceptableDelay;
  }

  ngOnDestroy() {

    this.player.dispose();
  }

  seek(n) {
    this.player.currentTime(this.seekTime || 1266);
  }
  play(n) {

    if (this.player.paused()) {
      this.player.play();
    }
    else {
      this.player.pause();
    }
  }

  create() {
        this.player.src({
      src: 'https://oocache-live-delivery-ooyala.akamaized.net/out/u/d8npqvovi8we5/110326/U3cWNvZjE6xpWi6dq7FE2Q8B362hEbfl/en/cc984f46656c4ecc889711165c08b378.m3u8'
    });

    this.player.src({
      src: this.url

    });
    this.player.play();
    this.player.controlBar.currentTimeDisplay();
  }

  destroy() {

  }

}
