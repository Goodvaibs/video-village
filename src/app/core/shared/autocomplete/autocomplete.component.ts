import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { startWith } from 'rxjs/operators/startWith';
import { map } from 'rxjs/operators/map';
import * as _ from 'lodash';
import { HomepageService } from '../../services/homepage.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.scss']
})
export class AutocompleteComponent implements OnInit {

  stateCtrl: FormControl = new FormControl();
  filteredStates: Observable<any[]>;
  states: String[];
  constructor(private homepageService: HomepageService,
    private router:Router) {
  }

  ngOnInit() {
  }

  getStates(value) {
    if(value.length > 0) {
    this.homepageService.getSuggestions(value)
      .subscribe(data => {
        console.log(data);
        this.filteredStates = data.Suggests;
        // this.states = _.values(data);
        // this.filteredStates = this.stateCtrl.valueChanges
        //   .pipe(
        //   startWith(''),
        //   map(state => state ? this.filterStates(state) : this.states.slice())
        //   )
      })
    }
  }


  // filterStates(name: string) {
  //   return this.states.filter(state =>
  //     state.toLowerCase().indexOf(name.toLowerCase()) === 0);
  // }

  // redirect(value) {
  //   console.log(value);
  // }

  redirect(value, type) {
    console.log(value);
    if(type == 1) {
      this.router.navigate(['/series', value]);
    } else if(type == 2 ) {
      this.router.navigate(['/movies-details', value]);
    } else {
      console.log(value);
    }
  }
}
