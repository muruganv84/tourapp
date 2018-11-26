import { Component } from '@angular/core';
import { Routes, RouterModule, Router, ActivatedRoute } from "@angular/router";



@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {

  constructor(private router : Router) {
  }

  username : string
  password : string

  login() : void {
    if(this.username == 'user' && this.password == 'pass'){
      setTimeout(() => this.router.navigate(["trip"]));
    }else {
      alert("Invalid credentials");
    }
  }
}
