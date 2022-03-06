import { Component, ElementRef, OnInit, QueryList, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-shorts',
  templateUrl: './shorts.component.html',
  styleUrls: ['./shorts.component.scss']
})
export class ShortsComponent implements OnInit {
  @ViewChildren('home_paginated_gallery') scrollers: QueryList<ElementRef>

  constructor() { }

  ngOnInit(): void {
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

}
