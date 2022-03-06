import { Component, OnInit } from '@angular/core';
//services
import { AuthenticationService } from 'src/app/core/services/authentication.service';
import { UserPreferencesService } from 'src/app/core/services/user-preferences.service';
@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.scss']
})
export class MyProfileComponent implements OnInit {
  allTabs=['My Profile','Settings']
  public settingsTabs=['Your Devices','Language','Watch History']
  public shownSettingsTab=this.settingsTabs[0];
  shown=this.allTabs[0]
  public userInfo:Object={
    "Id": '',
    "CognitoId": "",
    "FirstName": "",
    "MiddleName": "",
    "LastName": "",
    "MailId": "",
    "PhoneNo": "",
    "UserPreferences": [],
    "WatchHistory": []
  };
  public watchHistory:any=[];
  public loaded=false;
  public originalUserInfo:Object=null;
  constructor(private userService: UserPreferencesService ) { 

  }

  ngOnInit(): void {
    this.userService.fetchUserDetails().subscribe(res=>{
      this.userInfo=JSON.parse(JSON.stringify(res));
      console.log("got userInfo",res);
      this.loaded=true;
      this.userService.setUserDetails(JSON.parse(JSON.stringify(this.userInfo)));
    });
    this.userService.fetchWatchHistory().subscribe(res=>{
      this.watchHistory=res;
    });
  }
  openContainer(item){
    this.shown=item
  }
  updateUserInfo(){
    console.log(this.userInfo);
    this.userService.updateUserDetails(this.userInfo).subscribe(res=>{
      console.log("updated userInfo",res);
      if(res===true){
        this.userService.setUserDetails(JSON.parse(JSON.stringify(this.userInfo)));
      }else{
        this.userInfo=JSON.parse(JSON.stringify(this.userService.getUserDetails()));
      }
    })
  }
  resetUserInfo(){
    this.userInfo=JSON.parse(JSON.stringify(this.userService.getUserDetails()));
  }
  openSettingsTab(item){
    this.shownSettingsTab=item;
    console.log(this.shownSettingsTab)
  }


}