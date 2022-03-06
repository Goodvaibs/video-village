import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
@Component({
  selector: 'app-verify-otp',
  templateUrl: './verify-otp.component.html',
  styleUrls: ['./verify-otp.component.scss']
})
export class VerifyOtpComponent implements OnInit {
  otp = new FormControl(''); 
  isChecked=false; 
  isCheckedError=false; 
  constructor() { 
  }

  ngOnInit(): void {
  }
  submitOtp(){
    let otp=this.otp.value;
    if(this.isChecked){
    console.log("otp is ",otp);
    }else{
      console.log("terms not checked");
      this.isCheckedError=true;
    }
  }
  resendOtp(){
    console.error('user Generated : resend otp not implemented');
  }
  termsChecked(event){
    this.isChecked=!this.isChecked;
    if(this.isChecked){
      this.isCheckedError=false;
    }
  }

}
