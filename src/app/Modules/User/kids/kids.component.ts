import { Component, ElementRef, OnInit, QueryList, ViewChildren } from '@angular/core';
import { HomepageService } from '../../../core/services/homepage.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-kids',
  templateUrl: './kids.component.html',
  styleUrls: ['./kids.component.scss']
})
export class KidsComponent implements OnInit {

  continueWatching
  continueWatchingLength = 0;
  latest
  latestLength = 0;
  watchList
  watchListLength = 0;
  topKidsSeries
  topKidsSeriesLength = 0;
  topKidsMovies
  topKidsMoviesLength = 0;
  trendingNow
  trendingNowLength = 0;
  comingSoon
  comingSoonLength = 0;
  magic
  magicLength = 0;
  comedy
  comedyLength = 0;
  comedySeries
  comedySeriesLength = 0;
  fanstasymovies
  fanstasymoviesLength = 0;
  fantasySeries
  fantasySeriesLength = 0;
  @ViewChildren('home_paginated_gallery') scrollers: QueryList<ElementRef>


  constructor(
    public homepageService:HomepageService,
    public router:Router
  ) { }

  ngOnInit(): void {
  }

  getContinueWatching() {
    let body = {
      "ContentTypeId": 1,
      "FilterKey": 2,
      "FilterValue": 4,
      "PageNo": 0,
      "PageSize": 10
    }
    this.homepageService.getBySearchFilters(body).subscribe(res => {
      console.log(res);
      this.continueWatching = res;
      this.continueWatchingLength = res.length;
    });
  }

  getLatest() {
    let body = {
      "ContentTypeId": 1,
      "FilterKey": 2,
      "FilterValue": 4,
      "PageNo": 0,
      "PageSize": 10
    }
    this.homepageService.getBySearchFilters(body).subscribe(res => {
      console.log(res);
      this.latest = res;
      this.latestLength = res.length;
    });
  }

  getWatchList() {
    let body = {
      "ContentTypeId": 1,
      "FilterKey": 2,
      "FilterValue": 4,
      "PageNo": 0,
      "PageSize": 10
    }
    this.homepageService.getBySearchFilters(body).subscribe(res => {
      console.log(res);
      this.watchList = res;
      this.watchListLength = res.length;
    });
  }

  getTrendingNow() {
    let body = {
      "ContentTypeId": 1,
      "FilterKey": 2,
      "FilterValue": 4,
      "PageNo": 0,
      "PageSize": 10
    }
    this.homepageService.getBySearchFilters(body).subscribe(res => {
      console.log(res);
      this.trendingNow = res;
      this.trendingNowLength = res.length;
    });
  }

  getComingSoon() {
    let body = {
      "ContentTypeId": 1,
      "FilterKey": 2,
      "FilterValue": 4,
      "PageNo": 0,
      "PageSize": 10
    }
    this.homepageService.getBySearchFilters(body).subscribe(res => {
      console.log(res);
      this.comingSoon = res;
      this.comingSoonLength = res.length;
    });
  }

  getComedy() {
    let body = {
      "ContentTypeId": 1,
      "FilterKey": 2,
      "FilterValue": 4,
      "PageNo": 0,
      "PageSize": 10
    }
    this.homepageService.getBySearchFilters(body).subscribe(res => {
      console.log(res);
      this.comedy = res;
      this.comedyLength = res.length;
    });
  }

  getTopKidsseries() {
    let body = {
      "ContentTypeId": 1,
      "FilterKey": 2,
      "FilterValue": 4,
      "PageNo": 0,
      "PageSize": 10
    }
    this.homepageService.getBySearchFilters(body).subscribe(res => {
      console.log(res);
      this.topKidsSeries = res;
      this.topKidsSeriesLength = res.length;
    });
  }

  getTopKidsMovies() {
    let body = {
      "ContentTypeId": 1,
      "FilterKey": 2,
      "FilterValue": 4,
      "PageNo": 0,
      "PageSize": 10
    }
    this.homepageService.getBySearchFilters(body).subscribe(res => {
      console.log(res);
      this.topKidsMovies = res;
      this.topKidsMoviesLength = res.length;
    });
  }

  getMagic() {
    let body = {
      "ContentTypeId": 1,
      "FilterKey": 2,
      "FilterValue": 4,
      "PageNo": 0,
      "PageSize": 10
    }
    this.homepageService.getBySearchFilters(body).subscribe(res => {
      console.log(res);
      this.magic = res;
      this.magicLength = res.length;
    });
  }

  getcomdeySeries() {
    let body = {
      "ContentTypeId": 1,
      "FilterKey": 2,
      "FilterValue": 4,
      "PageNo": 0,
      "PageSize": 10
    }
    this.homepageService.getBySearchFilters(body).subscribe(res => {
      console.log(res);
      this.comedySeries = res;
      this.comedySeriesLength = res.length;
    });
  }

  getFantasyMovies() {
    let body = {
      "ContentTypeId": 1,
      "FilterKey": 2,
      "FilterValue": 4,
      "PageNo": 0,
      "PageSize": 10
    }
    this.homepageService.getBySearchFilters(body).subscribe(res => {
      console.log(res);
      this.fanstasymovies = res;
      this.fanstasymoviesLength = res.length;
    });
  }

  getFanstasySeries() {
    let body = {
      "ContentTypeId": 1,
      "FilterKey": 2,
      "FilterValue": 4,
      "PageNo": 0,
      "PageSize": 10
    }
    this.homepageService.getBySearchFilters(body).subscribe(res => {
      console.log(res);
      this.fantasySeries = res;
      this.fantasySeriesLength = res.length;
    });
  }
  ngAfterViewInit(){

    setTimeout(()=>{
    this.scrollers.forEach((scroller)=>{
      this.setScollListener(scroller.nativeElement);
    })
  },2000)
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
