import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-information-to-user',
  templateUrl: './information-to-user.component.html',
  styleUrls: ['./information-to-user.component.scss']
})
export class InformationToUserComponent implements OnInit {
  public allTabs=["Help","Registering","Subscription","Payment","My Account","Password"];
  public shown=this.allTabs[0];
  public sidebar:Boolean = false;
  constructor() { }

  ngOnInit(): void {
  }
  sidebarOpen(){
    console.log("sidebar open");
    this.sidebar=true;
  }
  sidebarClose(){
    console.log("sidebar close");
    this.sidebar=false;
  }
  openContainer(item){
    this.shown=item;
  }
  
}
