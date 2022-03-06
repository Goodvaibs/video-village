import { Component, ElementRef, OnInit, QueryList, ViewChildren } from '@angular/core';
import { HomepageService } from 'src/app/core/services/homepage.service'
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {

   //contents varials
   moviePoster
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

   isSetUser
   watchedSet = false;
   @ViewChildren('home_paginated_gallery') scrollers: QueryList<ElementRef>
  constructor(
    public homepageService:HomepageService,
    public router:Router
  ) {
    this.isSetUser = JSON.parse(localStorage.getItem("currentUser"));
    if(this.isSetUser) {
      this.watchedSet = true;
    }
  }

  ngOnInit(): void {
    this.getLoadData();
  }

  counter(i: number) {
    return new Array(i);
  }

  getMovies() {
    this.homepageService.getAllMovies().subscribe(res => {
      console.log(res);
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
      this.MalMoviesLength = res.length;
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
      this.horrorMoviesLength = res.length;
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
      this.trillerMoviesLength  = res.length;
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
      this.teluguMoviesLength  = res.length;
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
      this.hindiMoviesLength = res.length;
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
      "FilterValue": 1,
      "PageNo": 0,
      "PageSize": 10
    }
    this.homepageService.getBySearchFilters(body).subscribe(res => {
      console.log(res);
      this.series = res;
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
      console.log(this.watchedMoviesLength);
    });
  }

  getLoadData() {
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
    this.getComingSoon();
    this.getKids();
    this.getTopRatedMovies();
    if(this.isSetUser) {
      this.getWatchedMovies();
    }
  }
  ngAfterViewInit(){

    setTimeout(()=>{
    this.scrollers.forEach((scroller)=>{
      this.setScollListener(scroller.nativeElement);
    })
  },4000)
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

  langSelect(lang) {
    this.router.navigate(['/more-like-this', lang]);
  }

}
