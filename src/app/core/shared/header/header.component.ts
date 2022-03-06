import { Component, OnInit, HostListener } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ModalsComponent } from '../modals/modals.component'
import { AuthenticationService } from '../../services/authentication.service'
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import { HomepageService } from '../../services/homepage.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  title = 'angular-material-modals';

  city: string;
  name: string;
  food_from_modal: string;

  userDetails;

  isSignedIn = false;

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(e) {
     if (window.pageYOffset > 50) {
       let element = document.getElementById('header');
       console.log("yesyy");
       console.log(element);
       element.classList.add('sticky');
     } else {
      let element = document.getElementById('header');
        console.log("dfgfd");
        element.classList.remove('sticky');
     }
  }


  constructor(public dialog: MatDialog,
    public router: Router,
    private authService:AuthenticationService,
    private homePageService:HomepageService) {
      console.log("sds");
      this.getUserDetails();

  }

  openDialog(): void {
    const dialogRef = this.dialog.open(ModalsComponent, {
      width: '100%',
      height: '100%',
      data: { name: this.name, animal: this.city }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);
      this.city = result;
      this.food_from_modal = result.food;
    });
  }

  ngOnInit(): void {
  }

  profilePage(): void {
    this.router.navigate(['/profile']);
  }

  getUserinfo() {
    this.authService.currentUserInfo().then(res => {
      console.log(res);
    });
  }

  getUserDetails() {
    this.userDetails = this.authService.getUserInfoFromStorage();
      if(this.userDetails) {
        this.isSignedIn = true;
      } else {
        this.isSignedIn = false;
      }
  }

  // getSuggestion(value) {
  //   console.log(value);
  //   this.homePageService.getSuggestions(value).subscribe(res => {
  //     console.log(res);
  //     this.filteredOptions = res;
  //   });
  // }

  getLanguage(value) {
    console.log(value);
  }

  logout() {
    localStorage.clear();
    location.reload();
  }

}
