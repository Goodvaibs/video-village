import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from "ngx-spinner";


@Component({
  selector: 'app-loader-comp',
  templateUrl: './loader-comp.component.html',
  styleUrls: ['./loader-comp.component.scss']
})
export class LoaderCompComponent implements OnInit {

  constructor(private spinner: NgxSpinnerService) {}

  ngOnInit() {
    /** spinner starts on init */
    this.spinner.show();

    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.spinner.hide();
    }, 5000);
  }

}
