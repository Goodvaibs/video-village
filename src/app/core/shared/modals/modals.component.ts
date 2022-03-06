import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Form, FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { first } from 'rxjs/operators';
import Swal from 'sweetalert2';
import { AuthenticationService } from 'src/app/core/services/authentication.service';
import { AuthService } from 'src/app/core/services/auth.service';
import { NgxSpinnerService } from "ngx-spinner";


const user1 = {
  username: "marvinaroza@gmail.com",
  password: "Marvin@123",
  attributes: {
       email: "marvinaroza@gmail.com",
       phone_number: "+918197854524"
       // other custom attributes
     }
}

@Component({
  selector: 'app-modals',
  templateUrl: './modals.component.html',
  styleUrls: ['./modals.component.scss']
})
export class ModalsComponent implements OnInit {

  food: string;

  //Basic Variables
  Form: FormGroup;
  Form1: FormGroup;
  Form2: FormGroup;
  Form3: FormGroup;
  Form4: FormGroup;

  //Flags
  loading = false;
  submitted = false;
  form3loading = false;

  //Tabs
  signInTab = true;
  getStatrtedTab = false;

  //selectedView
  signView =true;
  getStartedView1 = false;
  getphonenumberView = false;
  getEmailView = false;
  otpView =false;
  emailOtpView = false;
  mobileOtpImageView = false;
  emailOtpImageView = false;
  getStartedImage = false;
  signImageView = true;
  signInView1 = false;
  signWithEmailImage = false;
  signWithPhoneImage = false;

  afterSignUp = false;

  //saved values
  signInemail
  signInPhone
  cognitoId
  savedPassword

  //other varaibles
  user:any;

  constructor(
    public dialogRef: MatDialogRef<ModalsComponent>,
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private authService: AuthenticationService,
    private auth2Service: AuthService,
    private spinner: NgxSpinnerService,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() : void {
    this.createForm();
    this.spinner.show();

    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.spinner.hide();
    }, 5000);
  }

  onNoClick(): void {
    console.log("Ds");
    this.dialogRef.close({
      food: this.food
    });
  }


  onSubmit() {
    console.log(this.Form);

    this.submitted = true;
    this.user = {
      username: this.f.username.value,
      password: this.f.password.value
    }

    if (this.Form.invalid) {
      return;
    } else {
      this.spinner.show();
      this.authService.signIn(this.user).then(res => {
        console.log(res);
        if(res.code == 'NotAuthorizedException' || res.code == 'UserNotFoundException') {
          console.log(res);
          Swal.fire({
            icon: 'error',
            title: res.message,
            showConfirmButton: false,
            timer: 1500
          }).then( () => {
            // location.reload();
            this.spinner.hide();
            this.router.navigate(['']);
          });
        } else {
          // Swal.fire({
          //   icon: 'success',
          //   title: 'Login successfull...!',
          //   showConfirmButton: false,
          //   timer: 1500
          // }).then( () => {
            this.auth2Service.getUserByCognitoId(res.username).subscribe(res => {
              console.log(res);
              this.spinner.hide();
              this.selectViews('done');
              this.onNoClick();
              // location.reload();
              location.reload();
            });
            // this.onNoClick();
            // // location.reload();
            // location.reload();
          // });
        }
      });
    }

  }

  onSubmit1() {
    console.log(this.Form1);
    this.submitted = true;

    this.user = {
      username: '+91'+ this.f1.phone.value,
      password: this.f1.password.value,
      attributes: {
        email: 'test@dummy.com',
      }
    }

    if (this.Form1.invalid) {
      return;
    } else {
      this.spinner.show();
      this.signInPhone = '+91'+ this.f1.phone.value;
      this.authService.register(this.user).then(res => {
        console.log(res);
        if(res.userConfirmed == false) {
          // Swal.fire({
          //   icon: 'success',
          //   title: 'Registration successfull. Continue with the confirmation.',
          //   showConfirmButton: false,
          //   timer: 1500
          // }).then( () => {
            // location.reload();
            // this.router.navigate(['./confirm-otp', res.user.username]);
            this.createForm3();
            this.selectViews('phoneOtp');
            this.spinner.hide();
          // });
        } else {
          Swal.fire({
            icon: 'error',
            title: res.message,
            showConfirmButton: false,
            timer: 1500
          });
          this.spinner.hide();
        }
      }).catch(err => console.log(err));;
    }
  }


  onSubmit2() {
    console.log(this.Form1);
    this.submitted = true;
    this.user = {
      username: this.f2.email.value,
      password: this.f2.password.value
    }

    this.savedPassword = this.f2.password.value;

    if (this.Form2.invalid) {
      return;
    } else {
      this.spinner.show();
      this.signInemail = this.f2.email.value;
      this.authService.register(this.user).then(res => {
        console.log(res);
        this.cognitoId = res.userSub;
        if(res.userConfirmed == false) {
          // Swal.fire({
          //   icon: 'success',
          //   title: 'Registration successfull. Continue with the confirmation.',
          //   showConfirmButton: false,
          //   timer: 1500
          // }).then( () => {
            this.createForm3();
            this.selectViews('emailOtp');
            this.spinner.hide();
          // });
        } else {
          Swal.fire({
            icon: 'error',
            title: res.message,
            showConfirmButton: false,
            timer: 1500
          });
          this.spinner.hide();
        }
      }).catch(err => console.log(err));;
    }
  }

  //Controls for form
  createForm() {
    this.Form = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
    this.createForm1();
  }

  //Controls for form
  createForm1() {
    this.Form1 = this.fb.group({
      phone: ['', Validators.required],
      password: ['', Validators.required],
      terms: ['', Validators.required]
    });
    this.createForm2();
  }

  //Controls for form
  createForm2() {
    this.Form2 = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
      terms: ['', Validators.required]
    });
    this.loading = true;
  }

  //Controls for form
  createForm3() {
    this.Form3 = this.fb.group({
      verifycode: ['', Validators.required],
    });
    this.form3loading = true;
  }

  //Controls for form
  createForm4() {
    this.Form4 = this.fb.group({
      first_name: ['', Validators.required],
      middle_name: [''],
      last_name: ['', Validators.required],
      email: [this.signInemail, Validators.required],
      phone: [this.signInPhone, Validators.required]
    });
  }

  // convenience getter for easy access to form fields
  get f() { return this.Form.controls; }
  get f1() { return this.Form1.controls; }
  get f2() { return this.Form2.controls; }
  get f3() { return this.Form3.controls; }
  get f4() { return this.Form4.controls; }

  async signInWithGoogle() {
    // const socialResult =
    await this.authService.socialSignIn(AuthenticationService.GOOGLE).then(res => {
      console.log(res);
    });
    // console.log('google Result:', socialResult);
  }

  async signInWithFacebook() {
    // const socialResult =
    await this.authService.socialSignIn(AuthenticationService.FACEBOOK).then(res => {
      console.log(res);
    });
    // console.log('google Result:', socialResult);
  }


  //email otp
  onSubmit3(id) {
    console.log(this.Form3);

    this.submitted = true;

    if (this.Form3.invalid) {
      return;
    } else {
      this.spinner.show();
      let param;
      if(id == 2) {
        param = this.signInemail
      } else {
        param = this.signInPhone
      }
      this.authService.confirmUser(param, this.f3.verifycode.value.toString()).then(res => {
        console.log(res);
        if(res == "SUCCESS") {
          // Swal.fire({
          //   icon: 'success',
          //   title: 'Confirmation successfull. Welcome to Video village..!',
          //   showConfirmButton: false,
          //   timer: 1500
          // }).then( () => {
            this.createForm4();
            // location.reload();
            // this.router.navigate(['./home']);
            this.selectViews('afterOtp');
            this.spinner.hide();
          // });
        } else {
          Swal.fire({
            icon: 'error',
            title: res.message,
            showConfirmButton: false,
            timer: 1500
          });
          this.spinner.hide();
        }
      });
    }
  }


  //email otp
  onSubmit4() {
    console.log(this.Form4);

    this.submitted = true;

    if (this.Form4.invalid) {
      return;
    } else {
      let phone_no;
      if(!this.signInPhone) {
        phone_no = '+91'+ this.f4.phone.value;
      } else {
        phone_no = this.f4.phone.value;
      }

      let body = {
        "CognitoId": this.cognitoId,
        "FirstName": this.f4.first_name.value,
        "MiddleName": this.f4.middle_name.value,
        "LastName": this.f4.last_name.value,
        "MailId": this.f4.email.value,
        "PhoneNo": phone_no
      }
      this.auth2Service.AddUser(body).subscribe(res => {
        console.log(res);
        if(res > 0) {
          this.spinner.show();
          let body = {
            username: this.f4.email.value,
            password: this.savedPassword
          }
          this.authService.signIn(this.user).then(res => {
            console.log(res);
            if(res.code == 'NotAuthorizedException' || res.code == 'UserNotFoundException') {
              console.log(res);
              Swal.fire({
                icon: 'error',
                title: res.message,
                showConfirmButton: false,
                timer: 1500
              });
            } else {
              // Swal.fire({
              //   icon: 'success',
              //   title: 'Login successfull...!',
              //   showConfirmButton: false,
              //   timer: 1500
              // }).then( () => {
                this.auth2Service.getUserByCognitoId(this.cognitoId).subscribe(res => {
                  console.log(res);
                  this.selectViews('done');
                  this.onNoClick();
                  // location.reload();
                  this.spinner.hide();
                  location.reload();
                });
              // });
            }
          });
        } else {
          Swal.fire({
            icon: 'error',
            title: res.message,
            showConfirmButton: false,
            timer: 1500
          });
          this.spinner.hide();
        }
      });
    }
  }

  selectViews(type) {
    this.signView =false;
    this.getStartedView1 = false;
    this.getphonenumberView = false;
    this.getEmailView = false;
    this.otpView =false;
    this.emailOtpView = false;
    this.mobileOtpImageView = false;
    this.emailOtpImageView = false;
    this.getStartedImage = false;
    this.signImageView = false;
    this.signInView1 = false;
    this.signInTab = false;
    this.getStatrtedTab = false;
    this.signWithEmailImage = false;
    this.signWithPhoneImage = false;
    this.afterSignUp = false;

    if(type == 'login') {

      console.log("login");
      this.signView = true;
      this.signImageView = true;
      this.signInTab = true;

    } else if(type == 'register') {

      this.getStatrtedTab = true;
      this.getStartedView1 = true;
      this.getStartedImage = true;

    } else if (type == 'phone') {

      this.getStatrtedTab = true;
      this.getphonenumberView = true;
      this.signWithPhoneImage = true;

    } else if (type == 'email') {

      this.getStatrtedTab = true;
      this.signWithEmailImage = true;
      this.getEmailView = true;

    } else if (type == 'phoneOtp') {
      this.otpView = true;
      this.mobileOtpImageView = true;

    } else if (type == 'emailOtp') {
      this.emailOtpView = true;
      this.emailOtpImageView = true;
    } else if (type == 'afterOtp') {
      this.afterSignUp = true;
    } else if (type == 'done') {
      this.signView =false;
      this.getStartedView1 = false;
      this.getphonenumberView = false;
      this.getEmailView = false;
      this.otpView =false;
      this.emailOtpView = false;
      this.mobileOtpImageView = false;
      this.emailOtpImageView = false;
      this.getStartedImage = false;
      this.signImageView = false;
      this.signInView1 = false;
      this.signInTab = false;
      this.getStatrtedTab = false;
      this.signWithEmailImage = false;
      this.signWithPhoneImage = false;
      this.afterSignUp = false;
    }
  }

}
