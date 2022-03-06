import { Component,ElementRef, OnInit, Input, OnDestroy, ViewChild, ViewEncapsulation, AfterViewInit } from '@angular/core';
import { Router, ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router'
import { HomepageService } from 'src/app/core/services/homepage.service';
import { UserPreferencesService } from 'src/app/core/services/user-preferences.service';
import {DomSanitizer} from '@angular/platform-browser';
import { threadId } from 'worker_threads';
import {IPlayable, VgApiService} from '@videogular/ngx-videogular/core';
import { VgHlsDirective} from '@videogular/ngx-videogular/streaming';
@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnInit {

  contentId = this.route.snapshot.params.id;
  timeCode = this.route.snapshot.params.id2;

  //variables
  movie
  playing = false;

  director = [];
  dirLength = 0;
  producer = [];
  prodLength = 0
  actor = [];
  actLength = 0

  morelikethisLength
  morelikethis

  languageId

  trailerPlay;

  api:VgApiService;

  tracks: IPlayable

  constructor(private route:ActivatedRoute,
    private router: Router,
    elementRef: ElementRef,
    private homepageService:HomepageService,
    private userPreferenceService: UserPreferencesService,
    private sanitizer: DomSanitizer) {
      this.route.params.subscribe(params => {
        this.contentId = params['id'];
        this.getMovieById();
        console.log(params['id']); //or whatever you put in your routing
        // here your logic to use this id

     });
     // this.getMovieById();
      console.log(this.api);

    }
  @ViewChild('paginated_gallery1')moreLikeThisGallery:ElementRef;
  tab:any = 'moreLikeThis';

  ngOnInit(): void {
    this.trailerPlay = false;

  }

  getMovieById() {
    this.homepageService.getMovieById(this.contentId).subscribe(res => {
      console.log(res);
      window.scroll(0,0);
      this.movie = res;
      this.languageId = res.LanguageId
      this.moreLikethis();
      this.movie.CastAndCrewInfo.forEach(element => {
        if(element.SkillName == 'Director') {
          this.director.push(element.CastCrewName);
          this.dirLength++;
        }

        if(element.SkillName == 'Producer') {
          this.producer.push(element.CastCrewName);
          this.prodLength++
          console.log(this.prodLength);
        }

        if(element.Type == 1) {
          this.actor.push(element.CastCrewName);
          this.actLength++
          console.log(this.actor);
        }

      });
    });
  }

  moreLikethis() {
    let body = {
      "ContentTypeId": 1,
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

  playMovie() {
    this.playing = true;
  }

  // playTrailer() {
  //   console.log(this.api);
  //   // this.trailerPlay = true;
  //   this.api.state = 'play';
  //   console.log(this.api.state);
  //   this.api.play()
  // }

  onPlayerReady(api:VgApiService) {
    this.api = api;

    // this.tracks = {textTracks:this.movie.Subtitle};
    // this.api.$$addTextTrack(this.tracks);

    console.log("hello");
    let videotime = Math.round(this.api.getDefaultMedia().currentTime);
    let totalTime = Math.round(this.api.getDefaultMedia().duration);
    if(this.timeCode) {
      this.api.currentTime = this.timeCode;
      this.api.play();
    }

    this.api.getDefaultMedia().subscriptions.seeked.subscribe(
        res => {
            // Set the video to the beginning
            // this.api.getDefaultMedia().currentTime = 0;
            console.log(this.api.getDefaultMedia().currentTime);
        }
    );

    this.api.getDefaultMedia().subscriptions.pause.subscribe(res1 => {
      console.log(res1);
      console.log(Math.round(this.api.getDefaultMedia().duration));
      // videotime = Math.round(this.api.getDefaultMedia().currentTime);

      console.log(JSON.parse(localStorage.getItem('UserDetails')));
      this.videoTimeUpdate(videotime, totalTime);
    });

    this.api.getDefaultMedia().subscriptions.abort.subscribe(res2 => {
      console.log(videotime);
      console.log(totalTime);
      this.videoTimeUpdate(videotime, totalTime);
    });

    this.api.getDefaultMedia().subscriptions.ended.subscribe(res3 => {
      console.log(res3);
      videotime = 0;
      this.videoTimeUpdate(videotime, totalTime);
    });

    // this.api.getDefaultMedia().
  }

  trailerPlayFunc() {
    this.api.play();
  }
  onPlayerTrailerReady(api:VgApiService) {
    this.api = api;
    console.log(api);
    this.api.play();
    this.api.getDefaultMedia().subscriptions.pause.subscribe(res => {
      console.log(res);
    });
    this.api.getDefaultMedia().subscriptions.ended.subscribe(
      res => {
          // Set the video to the beginning
          // this.api.getDefaultMedia().currentTime = 0;
          console.log(this.api.getDefaultMedia().currentTime);
          console.log("ended");
          this.trailerPlay = true;
          console.log(this.trailerPlay);
      }
    );
    this.api.getDefaultMedia().subscriptions.abort.subscribe(res2 => {
      console.log(res2);
    });
  }

  videoTimeUpdate(time, time2) {
    var UserDetails = JSON.parse(localStorage.getItem('UserDetails'));
    if(UserDetails) {
      let body = {
        UserId: UserDetails.Id,
        ContentId: parseInt(this.contentId),
        TimeCode: time,
        RunTime: time2
      }

      this.userPreferenceService.updateVideoWatch(body).subscribe(res => {
        console.log(res);
      });
    }
  }

  counter(i: number) {
    return new Array(i);
  }

  getPageById(contentId, timeCode = 0) {
    console.log("more test");
    this.router.navigate(['/movies-details', contentId, timeCode]);
  }

  ngAfterViewInit(){

    }
  switchTabs(tabname){
    this.tab=tabname;
    if(this.tab=='moreLikeThis'){
      setTimeout(()=>{
        this.event(this.moreLikeThisGallery.nativeElement)
      },100);
    }
  }

  event(gallery) {
    const gallery_scroller = gallery.querySelector('.gallery_scroller');
    const gallery_item_size = gallery_scroller.querySelector('div').clientWidth;
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
