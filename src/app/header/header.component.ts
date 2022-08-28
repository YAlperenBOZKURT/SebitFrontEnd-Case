import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router:Router,private _snack: MatSnackBar, public loginService : LoginService ) { }

  ngOnInit(): void {
  }

  // Search value
  enteredSearchValue: string = '';
  onSearchTextChanged() {
    if (this.enteredSearchValue == '')
    this._snack.open("Give a hint","OK", {duration:2000} )
    else{
      this.router.navigate(
        ['/search'],
        { queryParams: { query: this.enteredSearchValue } }
      );
    }
  }


  logout() {
    this.loginService.user=undefined;
    this.router.navigateByUrl('/login');
  }
}
