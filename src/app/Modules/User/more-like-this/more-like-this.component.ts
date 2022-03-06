import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router'

import { HomepageService } from 'src/app/core/services/homepage.service';

@Component({
  selector: 'app-more-like-this',
  templateUrl: './more-like-this.component.html',
  styleUrls: ['./more-like-this.component.scss']
})
export class MoreLikeThisComponent implements OnInit {

  contentId = this.route.snapshot.params.id;

  title

  data;
  dataLength = 0;

  filterKey = 2;

  filterCategory = 1;

  languages = [{
    id: 1,
    name: 'Kannada'
  },{
    id: 2,
    name: 'Telugu'
  },{
    id: 3,
    name: 'Malayalam'
  },{
    id: 4,
    name: 'Tamil'
  },{
    id: 5,
    name: 'Hindi'
  },{
    id: 6,
    name: 'English'
  },{
    id: 7,
    name: 'Korean'
  },{
    id: 8,
    name: 'Russian'
  }]

  genre = [{
    id: 1,
    name: 'Action'
  },{
    id: 2,
    name: 'Comedy'
  },{
    id: 3,
    name: 'Sci-Fi'
  },{
    id: 4,
    name: 'War'
  },{
    id: 5,
    name: 'Historic'
  },{
    id: 6,
    name: 'Drama'
  },]

  category = [{
    id: 1,
    name: 'Movies'
  },{
    id: 2,
    name: 'Series'
  }]

  preferences = [{
    id: 4,
    name: 'Latest'
  },{
    id: 5,
    name: 'Coming Soon'
  },{
    id: 6,
    name: 'Top Rated'
  }]

  constructor(private route:ActivatedRoute,
    private homepageService: HomepageService,
    public router: Router) {
    console.log(this.contentId);
    this.getLanguage();
   }

  ngOnInit(): void {
    this.getPage();
  }

  counter(i: number) {
    return new Array(i);
  }

  changeLang(lang) {
    console.log(lang);
    if(lang) {
      this.dataLength = 0;
      this.contentId = lang;
      this.filterKey = 2;
      this.getLanguage();
      this.getPage();
    }

  }

  changeGenre(gen) {
    console.log(gen);
    if(gen) {
      this.dataLength = 0;
      this.contentId = gen;
      this.filterKey = 3;
      this.getPage();
    }
  }

  changeCategory(cat) {
    console.log(cat);
    if(cat) {
      this.dataLength = 0;
      this.filterCategory = parseInt(cat);
      this.getPage();
    }
  }

  getPage() {
    let body = {
      "ContentTypeId": this.filterCategory,
      "FilterKey": this.filterKey,
      "FilterValue": parseInt(this.contentId),
      "PageNo": 0,
      "PageSize": 20
    }
    this.homepageService.getBySearchFilters(body).subscribe(res => {
      console.log(res);
      this.data = res;
      this.dataLength = res.length;
      console.log(this.dataLength);
    });
  }

  getPageById(pageId, timeCode = 0) {
    if(this.filterCategory == 2) {
      this.router.navigate(['/series', pageId]);
    } else {
      this.router.navigate(['/movies-details', pageId, timeCode]);
    }
  }

  getLanguage() {
    if(this.contentId == 1) {
      this.title = 'Kannada'
    } else if(this.contentId == 2) {
      this.title = 'Telugu'
    } else if(this.contentId == 3) {
      this.title = 'Malayalam'
    } else if(this.contentId == 4) {
      this.title = 'Tamil'
    } else if(this.contentId == 5) {
      this.title = 'Hindi'
    } else if(this.contentId == 6) {
      this.title = 'English'
    } else if(this.contentId == 7) {
      this.title = 'Korean'
    } else if(this.contentId == 8) {
      this.title = 'Russian'
    }
  }



}
