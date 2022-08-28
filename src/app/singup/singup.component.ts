import { Component, OnInit } from '@angular/core';
import { FormGroup,  Validators, FormBuilder, AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';
import { SignupService } from '../services/signup.service';


@Component({
  selector: 'app-singup',
  templateUrl: './singup.component.html',
  styleUrls: ['./singup.component.css']
})
export class SingupComponent implements OnInit {

  registerForm!: FormGroup;
  obj = {
  firstname : '',
  lastname : '',
  password :'',
  email :'',
  phone :''
  }

  horizontalPosition: MatSnackBarHorizontalPosition = 'right';
  verticalPosition: MatSnackBarVerticalPosition = 'top';



  constructor(private fb:FormBuilder,private service : SignupService, private router : Router,private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.registerForm = this.fb.group(
      {
        firstName: ['', [Validators.required]],
        lastName: ['', [Validators.required]],
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(8)]],
        repassword: ['', [Validators.required, Validators.minLength(8)]],
        phone: ['', [Validators.required]],
      },
      {
        validators: this.matchingPasswords('password', 'repassword'),
      }
    );
  }
  matchingPasswords(Password: string, ConfirmPassword: string) {
    return (controls: AbstractControl) => {
      if (controls) {
        const Password = controls.get('password')!.value;
        const ConfirmPassword = controls.get('repassword')!.value;
        //console.log ("check what is passed to the validator", password, confirmPassword);
        if (Password !== ConfirmPassword) {
          //this is an error set for a specific control which you can use in a mat-error
          controls.get('repassword')?.setErrors({ not_the_same: true });
          //this is the returned error for the form normally used to disable a submit button
          return { mismatchedPassword: true };
        }
      }
      return null;
    };
  }

  createAccount() {

    this.service.getUser(this.registerForm.value.email).subscribe((res)=>{

    if ( res.length === 0 ) {

      this.service.postUser(this.obj).subscribe((res) => {


        this._snackBar.open('Registration Successful !', 'OK', {
          horizontalPosition: this.horizontalPosition,
          verticalPosition: this.verticalPosition,
          duration: 3000
        });



        setTimeout(() => {this.router.navigateByUrl('/login') }, 2000);

      })



    }
    else {
      this._snackBar.open('This email is being used','OK')
    }


  })


  }

}



