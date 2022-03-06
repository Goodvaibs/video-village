import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skeleton',
  templateUrl: './skeleton.component.html',
  styleUrls: ['./skeleton.component.scss']
})
export class SkeletonComponent implements OnInit {

  animation = 'pulse';
  contentLoaded = false;
  intervalId;

  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      this.contentLoaded = true;
    }, 2000);

    this.intervalId = setInterval(() => {
      this.animation = this.animation === 'pulse' ? 'progress-dark' : 'pulse';
    }, 5000);
  }

}
