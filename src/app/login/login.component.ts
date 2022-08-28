import { Component, OnInit } from '@angular/core';
import { FormGroup,  Validators, FormBuilder } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup
  constructor(private fb: FormBuilder,private loginService: LoginService,private snack: MatSnackBar,private router:Router) { }


  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ["", [Validators.required, Validators.email]],
      password: ["", [Validators.required, Validators.minLength(8)]],
    })
  }

  login()
  {
      this.loginService.getUser(this.loginForm.value.email).subscribe((res)=>{

        if (res.length === 0 ) {

          this.snack.open('Who are you ? we dont know you', 'OK');

        }
        else {
          if(res[0].password === this.loginForm.value.password) {
            this.loginService.user = res[0];
            localStorage.setItem('user',JSON.stringify(res[0]));
            this.router.navigateByUrl('/home');
            this.snack.open('Login successful','OK', {
              duration: 2000
            })


          }
          else {
            this.snack.open('Wrong Password','OK')

          }
          debugger;
        }
      })
  }

}
