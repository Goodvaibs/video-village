import { Component, OnInit } from '@angular/core';
import { Form, FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { first } from 'rxjs/operators';
import Swal from 'sweetalert2';

//services
import { AuthenticationService } from 'src/app/core/services/authentication.service';

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
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  //Basic Variables
  Form: FormGroup;

  //Flags
  loading = false;
  submitted = false;

  //other varaibles
  user:any;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private authService: AuthenticationService
  ) { }

  ngOnInit(): void {
    this.createForm();
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
            this.router.navigate(['']);
          });
        } else {
          Swal.fire({
            icon: 'success',
            title: 'Login successfull...!',
            showConfirmButton: false,
            timer: 1500
          }).then( () => {
            // location.reload();
            this.router.navigate(['./home']);
          });
        }
      });
    }

  }

  //Controls for form
  createForm() {
    this.Form = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
    this.loading = true;
  }

  // convenience getter for easy access to form fields
  get f() { return this.Form.controls; }

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

}
