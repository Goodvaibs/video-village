import { Component,ElementRef, OnInit, Input, OnDestroy, ViewChild, ViewEncapsulation, AfterViewInit } from '@angular/core';
import { Router, ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router'
import { SeriesService } from 'src/app/core/services/series.service';
import {DomSanitizer} from '@angular/platform-browser';
import { threadId } from 'worker_threads';
import { HomepageService } from 'src/app/core/services/homepage.service';
import { UserPreferencesService } from 'src/app/core/services/user-preferences.service';
import {VgApiService} from '@videogular/ngx-videogular/core';
import { VgHlsDirective} from '@videogular/ngx-videogular/streaming';

// export interface IMediaStream {
//   type: 'vod' | 'dash' | 'hls';
//   source: string;
//   label: string;
//   token?: string;
// }

@Component({
  selector: 'app-series-details',
  templateUrl: './series-details.component.html',
  styleUrls: ['./series-details.component.scss']
})
export class SeriesDetailsComponent implements OnInit {

  @ViewChild(VgHlsDirective) vgHls: VgHlsDirective;
  // bitrates: BitrateOptions[]
  bitrates
  // = [{
  //   width: 0,
  //   qualityIndex: 1,
  //   height: 0,
  //   mediaType: 'Video',
  //   bitrate: 1080,
  //   label: 'High'
  // }];
  // currentStream: IMediaStream;

  contentId = this.route.snapshot.params.id;
  movieDetails;
  playing = false;
  loading=true;
  hlsBitratess = []
  qualityArr = []
  series;
  seriesLength = 0;
  episode;
  episodeLength = 0;

  director
  directorLength = 0
  producer
  producerLength = 0
  actor
  actorLength = 0

  languageId

  morelikethisLength = 0
  morelikethis

  // currentStream: IMediaStream;
  streams

  playVideoUrl

  api:VgApiService;

  // bitrates

  // @ViewChild(VgHLS) vgHls: VgHLS;
  /*dummy data for series. the data coming from backend may not
  be in the sam format, that is a thing for integration time.
  */
 selected="allEpisodes";
 @ViewChild('paginated_gallery1') episodesGallery:ElementRef
 @ViewChild('paginated_gallery2') moreLikeThisGallery:ElementRef
  selectedSeason:any;
  dummy={
      title:"The Exorcist",
      seasons:[1,2,3,4,5,6],
      imdb:8.1,
      ageGroup:"13+",
      about:"The Rance family is haunted by a powerful demonic presence in their house. Supernatural events keep happening until two priests join forces to defeat evil forces.",
      imgSrc:"../../../../assets/imgsss/b2.png"
  }
  constructor(private route:ActivatedRoute,
    private router: Router,
    elementRef: ElementRef,
    private seriesService:SeriesService,
    private homepageService: HomepageService,
    private userPreferenceService: UserPreferencesService,
    private sanitizer: DomSanitizer) {
    this.dataCameFromApi();
  }

  ngOnInit(): void {
    console.log(this.contentId);
    if(this.contentId) {
      this.getSeriesById();
    }
  }

  cleanURL(url) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  hlsBitrates(rate) {
   console.log(rate);
  }

  setBitrate(option) {
    console.log(option);
    // this.playVideoUrl = rate.mediaType;
    this.vgHls.setBitrate(option);
    // switch (this.currentStream.type) {
    //   case 'hls':
    //       this.vgHls.setBitrate(option);
    //       break;
    // }
  }

  onPlayerReady(api:VgApiService) {
    this.api = api;

    let videotime;

    this.api.getDefaultMedia().subscriptions.seeked.subscribe(
        res => {
            // Set the video to the beginning
            // this.api.getDefaultMedia().currentTime = 0;
            console.log(this.api.getDefaultMedia().currentTime);
        }
    );

    this.api.getDefaultMedia().subscriptions.pause.subscribe(res1 => {
      console.log(res1);
      videotime = Math.round(this.api.getDefaultMedia().currentTime);
      console.log(JSON.parse(localStorage.getItem('UserDetails')));
      this.videoTimeUpdate(videotime);
    });

    this.api.getDefaultMedia().subscriptions.abort.subscribe(res2 => {
      console.log(res2);
      videotime = Math.round(this.api.getDefaultMedia().currentTime);
    });

    this.api.getDefaultMedia().subscriptions.ended.subscribe(res3 => {
      console.log(res3);
      videotime = 0;
    });

    // this.api.getDefaultMedia().
  }

  videoTimeUpdate(time) {
    var UserDetails = JSON.parse(localStorage.getItem('UserDetails'));
    let body = {
      UserId: UserDetails.Id,
      ContentId: parseInt(this.contentId),
      TimeCode: time
    }

    this.userPreferenceService.updateVideoWatch(body).subscribe(res => {
      console.log(res);
    });
  }

  dataCameFromApi(){
    this.dummy={
      title:"The Exorcist",
      seasons:[1,2,3,4,5,6],
      imdb:8.1,
      ageGroup:"13+",
      about:"The Rance family is haunted by a powerful demonic presence in their house. Supernatural events keep happening until two priests join forces to defeat evil forces.",
      imgSrc: "../../../../assets/imgsss/b2.png"
    }
    this.selectedSeason=this.dummy.seasons[0];
  }
  onOptionsSelected(){
    console.log("item selected");
  }
  addToWatchList(){
    console.log("add to watchList here");
  }
  share(){
    console.log("add share feature here");
  }
  download(){
    console.log("add download feature here");
  }
  play1(){
    console.log("add play feature here");

  }

  getSeriesById() {
    this.seriesService.getSeriesById(this.contentId).subscribe(res => {
      console.log(res);
      window.scroll(0,0);
      this.series = res;
      this.episode = res.Seasons[0]?.Episodes;
      this.episodeLength = res.Seasons[0]?.Episodes.length;
      this.languageId = this.series.LanguageId
      this.moreLikethis();
      this.series.CastAndCrewInfo.forEach(element => {
        if(element.SkillName == 'Director') {
          this.director.push(element.CastCrewName);
          this.directorLength++;
        }

        if(element.SkillName == 'Producer') {
          this.producer.push(element.CastCrewName);
          this.producerLength++
          console.log(this.producerLength);
        }

        if(element.Type == 1) {
          this.actor.push(element.CastCrewName);
          this.actorLength++
          console.log(this.actor);
        }

      });
    });
  }

  getEpisodeBySeasonId(id) {
    console.log(id);
    this.seriesService.getAllEpisodesById(id).subscribe(res => {
      console.log(res);
      this.episode = res.Episodes;
      this.episodeLength = res.Episodes.length;
    });
  }

  moreLikethis() {
    let body = {
      "ContentTypeId": 2,
      "FilterKey": 2,
      "FilterValue": this.languageId,
      "PageNo": 0,
      "PageSize": 10
    }
    this.homepageService.getBySearchFilters(body).subscribe(res => {
      console.log(res);
      this.morelikethis = res;
      this.morelikethisLength = res.length;
    });
  }

  counter(i: number) {
    return new Array(i);
  }

  getPageById(contentId) {
    this.router.navigate(['/series', contentId]);
  }

  play(value) {
    this.playVideoUrl = value.Hls_High;

    if(value) {
      this.bitrates = [
        {
          label: 'High',
          source: value.Hls_High,
          qualityIndex: 3
        },
        {
          label: 'Mid',
          source: value.Hls_Med,
          qualityIndex: 2
        },
        {
          label: 'Low',
          source: value.Hls_Low,
          qualityIndex: 1
        }
      ]
    }
    console.log(this.bitrates);
    this.playing = true;
  }

  ngAfterViewInit(){
    this.addJsToGalleryComponents()
  }
  addJsToGalleryComponents(){
    console.log("value of episodeGallery",this.episodesGallery);
    console.log("value of episodeGallery",this.moreLikeThisGallery);
    this.event(this.episodesGallery.nativeElement);
    this.event(this.moreLikeThisGallery.nativeElement);
    setTimeout(()=>{
      this.loading=false;
    },1000);
  }
  selectedChanged(elem){
    console.log("selected change");
    this.selected=elem;
  }
  event(gallery) {
    const gallery_scroller = gallery.querySelector('.gallery_scroller');
    const gallery_item_size = gallery_scroller.querySelector('div').clientWidth;
    console.log("gallery item size",gallery,gallery_item_size);
    gallery.querySelector('.forward_show_list').addEventListener('click', scrollToNextPage);
    gallery.querySelector('.backward_show_list').addEventListener('click', scrollToPrevPage);

    // For paginated scrolling, simply scroll the gallery one item in the given
    // direction and let css scroll snaping handle the specific alignment.
    function scrollToNextPage() {
        gallery_scroller.scrollBy(gallery_item_size, 0);
        console.log("next");
    }
    function scrollToPrevPage() {
        gallery_scroller.scrollBy(-gallery_item_size, 0);
        console.log("prev");
    }
}
}
