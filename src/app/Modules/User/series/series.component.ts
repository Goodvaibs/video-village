import { Component, ElementRef, OnInit, QueryList, ViewChildren } from '@angular/core';
import { from } from 'rxjs';
import { HomepageService } from '../../../core/services/homepage.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.scss']
})
export class SeriesComponent implements OnInit {

  continueWatching
  continueWatchingLength = 0;
  latest
  latestLength = 0;
  watchlist
  watchlistLength = 0;
  topseries
  topseriesLength = 0;
  trendingNow
  trendingNowLength = 0;
  kidFamily
  kidFamilyLength = 0;
  commingSoon
  commingSoonLength = 0;
  dramaSeries
  dramaSeriesLength = 0;
  comedySeries
  comedySeriesLength = 0;
  thrillerSeries
  thrillerSeriesLength = 0;
  @ViewChildren('home_paginated_gallery') scrollers: QueryList<ElementRef>

  constructor(
    public homepageService:HomepageService,
    public router:Router
  ) { }

  ngOnInit(): void {
    this.loadAll();
  }

  counter(i: number) {
    return new Array(i);
  }

  getPageById(contentId, timeCode = 0) {
      this.router.navigate(['/series', contentId,, timeCode]);
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
      this.watchlist = res;
      this.watchlistLength = res.length;
    });
  }

  getTopseries() {
    let body = {
      "ContentTypeId": 1,
      "FilterKey": 2,
      "FilterValue": 4,
      "PageNo": 0,
      "PageSize": 10
    }
    this.homepageService.getBySearchFilters(body).subscribe(res => {
      console.log(res);
      this.topseries = res;
      this.topseriesLength = res.length;
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

  getKidFamily() {
    let body = {
      "ContentTypeId": 1,
      "FilterKey": 2,
      "FilterValue": 4,
      "PageNo": 0,
      "PageSize": 10
    }
    this.homepageService.getBySearchFilters(body).subscribe(res => {
      console.log(res);
      this.kidFamily = res;
      this.kidFamilyLength = res.length;
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
      this.commingSoon = res;
      this.commingSoonLength = res.length;
    });
  }

  getDrama() {
    let body = {
      "ContentTypeId": 1,
      "FilterKey": 2,
      "FilterValue": 4,
      "PageNo": 0,
      "PageSize": 10
    }
    this.homepageService.getBySearchFilters(body).subscribe(res => {
      console.log(res);
      this.dramaSeries = res;
      this.dramaSeriesLength = res.length;
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
      this.comedySeries = res;
      this.comedySeriesLength = res.length;
    });
  }

  getThriller() {
    let body = {
      "ContentTypeId": 1,
      "FilterKey": 2,
      "FilterValue": 4,
      "PageNo": 0,
      "PageSize": 10
    }
    this.homepageService.getBySearchFilters(body).subscribe(res => {
      console.log(res);
      this.thrillerSeries = res;
      this.thrillerSeriesLength = res.length;
    });
  }

  loadAll() {
    this.getComedy();
    this.getComingSoon();
    this.getContinueWatching();
    this.getDrama();
    this.getKidFamily();
    this.getLatest();
    this.getThriller();
    this.getTopseries();
    this.getTrendingNow();
    this.getWatchList();
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
