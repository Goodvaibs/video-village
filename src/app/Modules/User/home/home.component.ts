import { Component, ElementRef, Input, OnDestroy, OnInit, ViewChild,ViewChildren, ViewEncapsulation, AfterViewInit, QueryList, HostListener } from '@angular/core';
import videojs from 'video.js';
import { Router, ActivatedRoute } from '@angular/router';
// import { VideojsComponent } from '../../../core/shared/videojs/videojs.component';

// declare var require: any;
// require('videojs-contrib-quality-levels');
// require('videojs-hls-quality-selector');

//services
import { AuthenticationService } from 'src/app/core/services/authentication.service';
import { HomepageService } from 'src/app/core/services/homepage.service';
import { SeriesService } from 'src/app/core/services/series.service';

import { NgxSpinnerService } from "ngx-spinner";
// declare const videojs: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  @ViewChild('paginated_carousal')carousal:ElementRef;
  @ViewChildren('home_paginated_gallery') scrollers: QueryList<ElementRef>
  movies
  moviePoster;
  url = "https://d2s5cesslnh4wz.cloudfront.net/8ff339672a374e1aa9346b95a7a46aa6001/hls1/master_med.m3u8?Expires=1601243679&Signature=X4F1NBuJVAy-tzqfDRt~8zxKOI1A92MMazYNCKZplgT0LYCl9eSU-nZ82VakiecbdVtskT9GcRhmkBpzY2e2ConMr~8hvFI~30cgvD6YX1mpZvTmFRnK6WxibBnspTcxTI4WBeDwM8UwlWWXHG7g~ADEw7aMmtfLESa7brKOqaIU8mwBgnjFREzuTLi7PvjPizKTgCKlIPQocVS9B1FOWycuBWRkJulVZD7aYuqnyqXyU7STkcKem613us7DuFm4r3bVqhO0LeKn6xwRHMwLaDQLVr6iE2rdeX07lmaZCrW8FhymcFXpvuyrdjbPrhsOLHraa0VLf2Ns~2SUyj2Lwg__&Key-Pair-Id=APKAIKKEJUUNH5EV374Q";

  //contents varials
  tamilMovies
  MalMovies
  dramaMovies
  englishMovies
  horrorMovies
  kanMovies
  trillerMovies
  teluguMovies
  hindiMovies
  comdeyMovies
  topRatedMovies
  dubbedMovies
  comingSoon
  trendingNow
  kids
  series
  latest
  watchedMovies
  carouselPoster

  //length
  tamilMoviesLength = 0;
  MalMoviesLength = 0;
  dramaMoviesLength = 0;
  englishMoviesLength = 0;
  horrorMoviesLength = 0;
  kanMoviesLength = 0;
  trillerMoviesLength = 0;
  teluguMoviesLength = 0;
  hindiMoviesLength = 0;
  comdeyMoviesLength = 0;
  topRatedMoviesLength = 0;
  dubbedMoviesLength = 0;
  comingSoonLength = 0;
  trendingNowLength = 0;
  kidsLength = 0;
  seriesLength = 0;
  latestLength = 0;
  watchedMoviesLength = 0;
  moviesLength = 0;

  skeletonloader = true;

  skeltonVariable = 10;

  watchedSet = false;
  isSetUser

  loadAPI: Promise<any>;


  constructor(
    private authService: AuthenticationService,
    private homepageService: HomepageService,
    private seriesService: SeriesService,
    elementRef: ElementRef,
    public router: Router,
    private spinner: NgxSpinnerService
  ) {
    // this.getCurrentToken();
    // this.getUserinfo();
    this.isSetUser = JSON.parse(localStorage.getItem("currentUser"));
    if(this.isSetUser) {
      this.watchedSet = true;
    }
  }

  ngOnInit(): void {
    this.spinner.show();

    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.spinner.hide();
    }, 5000);
    this.getMovieList();
    this.getLoadData();
  }

  counter(i: number) {
    return new Array(i);
  }


  public loadScript() {
    var isFound = false;
    var scripts = document.getElementsByTagName("script")
    for (var i = 0; i < scripts.length; ++i) {
        if (scripts[i].getAttribute('src') != null && scripts[i].getAttribute('src').includes("loader")) {
            isFound = true;
        }
    }

    if (!isFound) {
        var dynamicScripts = ["assets/js/home.js"];

        for (var i = 0; i < dynamicScripts.length; i++) {
            let node = document.createElement('script');
            node.src = dynamicScripts [i];
            node.type = 'text/javascript';
            node.async = false;
            node.charset = 'utf-8';
            document.getElementsByTagName('head')[0].appendChild(node);
        }

    }
}

  getCurrentToken() {
    this.authService.getCreds().then(res => {
      console.log(res);
    });
  }

  getUserinfo() {
    this.authService.currentUserInfo().then(res => {
      console.log(res);
    });
  }

  getMovieList() {
    this.homepageService.getAllMovies().subscribe(res => {
      console.log(res);
      this.movies = res
      this.moviesLength = res.length;
      console.log(res);
    });
  }

  getMovieByFilter() {
    let body = {
      "filterKey": 1,
      "filterValue": 1,
      "pageNo": 0,
      "pageSize": 10
    }
    this.homepageService.getByFilters(body).subscribe(res => {
      console.log(res);
      this.moviePoster = res;
      this.loadAPI = new Promise((resolve) => {
        this.loadScript();
        resolve(true);
      });
    });
  }

  getSeriesByFilter() {
    let body = {
      "filterKey": 1,
      "filterValue": 1,
      "pageNo": 0,
      "pageSize": 10
    }
    this.seriesService.getByFilters(body).subscribe(res => {
      console.log(res);
      this.series = res;
      this.seriesLength = this.series.length;
      console.log(this.seriesLength);
    });
  }

  getbyId() {
    this.homepageService.getMovieById('8ff339672a374e1aa9346b95a7a46aa6003').subscribe(res => {
      console.log();
    });
  }

  getPageById(contentId, page, timeCode = 0) {
    console.log(contentId);
    console.log(page);
    if(page == 'series') {
      this.router.navigate(['/series', contentId]);
    } else {
      this.router.navigate(['/movies-details', contentId, timeCode]);
    }
  }

  getBysearch() {
    let body = {
        "ContentTypeId": 1,
        "FilterKey": 3,
        "FilterValue": 1,
        "PageNo": 0,
        "PageSize": 10
    }
    this.homepageService.getBySearchFilters(body).subscribe(res => {
      console.log(res);
      this.moviePoster = res;
    });
  }

  getTamilMovies() {
    let body = {
      "ContentTypeId": 1,
      "FilterKey": 2,
      "FilterValue": 4,
      "PageNo": 0,
      "PageSize": 10
    }
    this.homepageService.getBySearchFilters(body).subscribe(res => {
      console.log(res);
      this.tamilMovies = res;
      this.tamilMoviesLength = res.length;
    });
  }

  getMalMovies() {
    let body = {
      "ContentTypeId": 1,
      "FilterKey": 2,
      "FilterValue": 3,
      "PageNo": 0,
      "PageSize": 10
    }
    this.homepageService.getBySearchFilters(body).subscribe(res => {
      console.log(res);
      this.MalMovies = res;
      this.MalMoviesLength = res.length
    });
  }

  getDramaMovies() {
    let body = {
      "ContentTypeId": 1,
      "FilterKey": 3,
      "FilterValue": 6,
      "PageNo": 0,
      "PageSize": 10
    }
    this.homepageService.getBySearchFilters(body).subscribe(res => {
      console.log(res);
      this.dramaMovies = res;
      this.dramaMoviesLength = res.length;
    });
  }

  getEnglishMovies() {
    let body = {
      "ContentTypeId": 1,
      "FilterKey": 2,
      "FilterValue": 6,
      "PageNo": 0,
      "PageSize": 10
    }
    this.homepageService.getBySearchFilters(body).subscribe(res => {
      console.log(res);
      this.englishMovies = res;
      this.englishMoviesLength = res.length;
    });
  }

  //not set
  getHorrorMovies() {
    let body = {
      "ContentTypeId": 1,
      "FilterKey": 3,
      "FilterValue": 7,
      "PageNo": 0,
      "PageSize": 10
    }
    this.homepageService.getBySearchFilters(body).subscribe(res => {
      console.log(res);
      this.horrorMovies = res;
      this.horrorMoviesLength = res.length
    });
  }

  getKanMovies() {
    let body = {
      "ContentTypeId": 1,
      "FilterKey": 2,
      "FilterValue": 1,
      "PageNo": 0,
      "PageSize": 10
    }
    this.homepageService.getBySearchFilters(body).subscribe(res => {
      console.log(res);
      this.kanMovies = res;
      this.kanMoviesLength = res.length;
    });
  }

  //not set
  getTrillerMovies() {
    let body = {
      "ContentTypeId": 1,
      "FilterKey": 3,
      "FilterValue": 8,
      "PageNo": 0,
      "PageSize": 10
    }
    this.homepageService.getBySearchFilters(body).subscribe(res => {
      console.log(res);
      this.trillerMovies = res;
      this.trillerMoviesLength = res.length;
    });
  }

  getTeluguMovies() {
    let body = {
      "ContentTypeId": 1,
      "FilterKey": 2,
      "FilterValue": 2,
      "PageNo": 0,
      "PageSize": 10
    }
    this.homepageService.getBySearchFilters(body).subscribe(res => {
      console.log(res);
      this.teluguMovies = res;
      this.teluguMoviesLength = res.length
    });
  }

  getHindiMovies() {
    let body = {
      "ContentTypeId": 1,
      "FilterKey": 2,
      "FilterValue": 5,
      "PageNo": 0,
      "PageSize": 10
    }
    this.homepageService.getBySearchFilters(body).subscribe(res => {
      console.log(res);
      this.hindiMovies = res;
      this.hindiMoviesLength = res.length
    });
  }

  getComdeyMovies() {
    let body = {
      "ContentTypeId": 1,
      "FilterKey": 3,
      "FilterValue": 2,
      "PageNo": 0,
      "PageSize": 10
    }
    this.homepageService.getBySearchFilters(body).subscribe(res => {
      console.log(res);
      this.comdeyMovies = res;
      this.comdeyMoviesLength = res.length;
    });
  }

  //not set
  getTopRatedMovies() {
    let body = {
      "ContentTypeId": 1,
      "FilterKey": 5,
      "FilterValue": 1,
      "PageNo": 0,
      "PageSize": 10
    }
    this.homepageService.getBySearchFilters(body).subscribe(res => {
      console.log(res);
      this.topRatedMovies = res;
      this.topRatedMoviesLength = res.length;
    });
  }

  //not set
  getDubbedMovies() {
    let body = {
      "ContentTypeId": 1,
      "FilterKey": 3,
      "FilterValue": 9,
      "PageNo": 0,
      "PageSize": 10
    }
    this.homepageService.getBySearchFilters(body).subscribe(res => {
      console.log(res);
      this.dubbedMovies = res;
      this.dubbedMoviesLength = res.length;
    });
  }

  //not set
  getComingSoon() {
    let body = {
      "ContentTypeId": 1,
      "FilterKey": 4,
      "FilterValue": 1,
      "PageNo": 0,
      "PageSize": 10
    }
    this.homepageService.getBySearchFilters(body).subscribe(res => {
      console.log(res);
      this.comingSoon = res;
      this.comingSoonLength = res.length;
    });
  }

  //not set
  getTrendingNow() {

  }

  //not set
  getKids() {
    let body = {
      "ContentTypeId": 1,
      "FilterKey": 7,
      "FilterValue": 1,
      "PageNo": 0,
      "PageSize": 10
    }
    this.homepageService.getBySearchFilters(body).subscribe(res => {
      console.log(res);
      this.kids = res;
      this.kidsLength = res.length;
      console.log(this.kidsLength);
    });
  }

  getSeries() {
    let body = {
      "ContentTypeId": 2,
      "FilterKey": 2,
      "FilterValue": 3,
      "PageNo": 0,
      "PageSize": 10
    }
    this.homepageService.getBySearchFilters(body).subscribe(res => {
      console.log(res);
      this.series = res;
      this.seriesLength = res.length;
      console.log(this.seriesLength);
    });
  }

  //not set
  getLatest() {
    let body = {
      "ContentTypeId": 1,
      "FilterKey": 4,
      "FilterValue": 1,
      "PageNo": 0,
      "PageSize": 10
    }
    this.homepageService.getBySearchFilters(body).subscribe(res => {
      console.log(res);
      this.latest = res;
      this.latestLength = res.length;
      console.log(this.latestLength);
    });
  }

  getWatchedMovies() {
    this.homepageService.getWatchedMovies().subscribe(res => {
      console.log(res);
      this.watchedMovies = res;
      this.watchedMoviesLength = res.length;
      if(this.watchedMoviesLength <= 0)
        this.watchedMoviesLength = -1
      // else {
      //   this.watchedMovies.forEach(element => {
      //     var timeCode = element.TimeCode
      //   });
      // }
      console.log(this.watchedMoviesLength);
    });
  }

  getLoadData() {
    this.getCarouselPosters();
    this.getBysearch();
    this.getTamilMovies();
    this.getMalMovies();
    this.getDramaMovies();
    this.getEnglishMovies();
    this.getKanMovies();
    this.getTeluguMovies();
    this.getHindiMovies();
    this.getComdeyMovies();
    this.getSeries();
    this.getHorrorMovies();
    this.getTrillerMovies();
    this.getDubbedMovies();
    this.getLatest();
    this.getKids();
    this.getComingSoon();
    this.getTopRatedMovies();
    if(this.isSetUser) {
      this.getWatchedMovies();
    }
    // this.getSeriesByFilter();
  }
  ngAfterViewInit(){
  //   this.setCarouselEventListener(this.carousal.nativeElement);
  //   console.log("all scroller components",this.scrollers);
  //   setTimeout(()=>{
  //   this.scrollers.forEach((scroller)=>{
  //     this.setScollListener(scroller.nativeElement);
  //   })
  // },4000)
  }
  ngOnDestroy(){

  }
  setScollListener(scrollElement){

    const gallery_scroller = scrollElement.querySelector('.gallery_scroller');
    let gallerySize=0;
    let gallery_item=null;
    let gallery_item_size=250;
    if(gallery_scroller){
      gallerySize=gallery_scroller.clientWidth;
      gallery_item=gallery_scroller.querySelector('.colored_card');
    }
    if(gallery_item){
      gallery_item_size= gallery_item.clientWidth;
    }
    console.log("gallerysize",gallerySize);
    console.log("gallery item size",gallery_item_size);
    scrollElement.querySelector('.forward_show_list').addEventListener('click', scrollToNextPage);
    scrollElement.querySelector('.backward_show_list').addEventListener('click', scrollToPrevPage);
    function scrollToNextPage() {
        gallery_scroller.scrollBy(gallery_item_size, 0);
        console.log("next");
        this.carousalIndex=this.carousalIndex+1;
    }
    function scrollToPrevPage() {
        gallery_scroller.scrollBy(-gallery_item_size, 0);
        console.log("prev");
        this.carousalIndex=this.carousalIndex+1;
    }
  }
  setCarouselEventListener(carousalElement){
    const gallery_scroller = carousalElement.querySelector('.carousel_scroll');
    const gallery_item_size = gallery_scroller.querySelector('div').clientWidth;
    const gallerySize=carousalElement.querySelector('.carousel_scroll').clientWidth;
    console.log("gallerysize",gallery_item_size);
    // console.log("gallery item size",carousalElement,gallery_item_size);
    // carousalElement.querySelector('.forward_show_list').addEventListener('click', scrollToNextPage);
    // carousalElement.querySelector('.backward_show_list').addEventListener('click', scrollToPrevPage);
    // carousalElement.addEventListener('scrolltoindex', scrollToIndex);
    // For paginated scrolling, simply scroll the gallery one item in the given
    // direction and let css scroll snaping handle the specific alignment.
    function scrollToNextPage() {
        gallery_scroller.scrollBy(gallery_item_size, 0);
        console.log("next");
        this.carousalIndex=this.carousalIndex+1;
    }
    function scrollToPrevPage() {
        gallery_scroller.scrollBy(-gallery_item_size, 0);
        console.log("prev");
        this.carousalIndex=this.carousalIndex+1;
    }
    // function scrollToIndex(index){
    //   gallery_scroller.scrollBy(-gallery_item_size*10);
    //   gallery_scroller.scrollBy(gallery_item_size*index);
    // }
  }
  changeCarousal(index){
    console.log('changecarousal',index);
    const gallery_scroller = this.carousal.nativeElement.querySelector('.carousel_scroll');
    const gallery_item_size = gallery_scroller.querySelector('div').clientWidth;
    gallery_scroller.scrollBy(-gallery_item_size*10,0);
    gallery_scroller.scrollBy(gallery_item_size*index,0);
  }

  langSelect(lang) {
    this.router.navigate(['/more-like-this', lang]);
  }

  //get carousel details
  getCarouselPosters() {
    this.homepageService.getCarouselPosters().subscribe(res => {
      console.log("poster",res);
      this.carouselPoster = res;
      console.log(this.carousal.nativeElement);
      this.setCarouselEventListener(this.carousal.nativeElement);
      console.log("all scroller components",this.scrollers);
      setTimeout(()=>{
        this.scrollers.forEach((scroller)=>{
          this.setScollListener(scroller.nativeElement);
        })
      },4000)
    });
  }

}
