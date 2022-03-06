import { Component, OnInit } from '@angular/core';
import { Form, FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { first } from 'rxjs/operators';
import Swal from 'sweetalert2';

//services
import { AuthenticationService } from 'src/app/core/services/authentication.service';

const user = {
  username: "marvinaroza@gmail.com",
  password: "Marvin@123",
  attributes: {
       email: "marvinaroza@gmail.com",
       phone_number: "+918197854524"
       // other custom attributes
     }
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  //Basic variables
  Form: FormGroup;

  //Flags
  loading = false;
  submitted = false;

  //other varaibles
  user:any;

  constructor(
    private fb: FormBuilder,
    private authService: AuthenticationService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.Form = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      phone: ['', Validators.required],
      password: ['', Validators.required],
      confirmpassword: ['', Validators.required]
    });
  }

  onSubmit() {
    console.log(this.Form);

    this.submitted = true;
    this.user = {
      username: this.f.email.value,
      password: this.f.password.value,
      attributes: {
          email: this.f.email.value,
          phone_number: this.f.phone.value,
          name: this.f.name.value
        }
    }

    if (this.Form.invalid) {
      return;
    } else {
      this.authService.register(this.user).then(res => {
        console.log(res);
        if(res.userConfirmed == false) {
          Swal.fire({
            icon: 'success',
            title: 'Registration successfull. Continue with the confirmation.',
            showConfirmButton: false,
            timer: 1500
          }).then( () => {
            // location.reload();
            this.router.navigate(['./confirm-otp', res.user.username]);
          });
        } else {
          Swal.fire({
            icon: 'error',
            title: res.message,
            showConfirmButton: false,
            timer: 1500
          }).then( () => {
            // location.reload();
            this.router.navigate(['./register']);
          });
        }
      }).catch(err => console.log(err));;
    }
  }

  // convenience getter for easy access to form fields
  get f() { return this.Form.controls; }

  signOut() {
    this.authService.signOut().then(res => {
      console.log(res);
    });
  }

}
