import { Component, OnInit } from '@angular/core';
import { Form, FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { first } from 'rxjs/operators';
import Swal from 'sweetalert2';

//services
import { AuthenticationService } from 'src/app/core/services/authentication.service';

@Component({
  selector: 'app-confirmotp',
  templateUrl: './confirmotp.component.html',
  styleUrls: ['./confirmotp.component.scss']
})
export class ConfirmotpComponent implements OnInit {

  //Basic variables
  Form: FormGroup;

  //Flags
  loading = false;
  submitted = false;

  //other varaibles
  user:any;

  //Params
  user_id = this.route.snapshot.params.id;

  constructor(
    private fb: FormBuilder,
    private authService: AuthenticationService,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.Form = this.fb.group({
      verifycode: ['', Validators.required]
    });
  }

  onSubmit() {
    console.log(this.Form);

    this.submitted = true;

    if (this.Form.invalid) {
      return;
    } else {
      this.authService.confirmUser(this.user_id, this.f.verifycode.value).then(res => {
        console.log(res);
        if(res == "SUCCESS") {
          Swal.fire({
            icon: 'success',
            title: 'Confirmation successfull. Welcome to Video village..!',
            showConfirmButton: false,
            timer: 1500
          }).then( () => {
            // location.reload();
            this.router.navigate(['./home']);
          });
        } else {
          Swal.fire({
            icon: 'error',
            title: res.message,
            showConfirmButton: false,
            timer: 1500
          }).then( () => {
            // location.reload();
            this.router.navigate(['./confirm-otp', this.user_id]);
          });
        }
      });
    }
  }

  // convenience getter for easy access to form fields
  get f() { return this.Form.controls; }

}
