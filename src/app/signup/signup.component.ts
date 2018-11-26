import { Component } from '@angular/core';
import { Routes, RouterModule, Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent  {

  constructor(private router : Router) {
  }

  username : string
  password : string

  login() : void {
    if(this.username == '' && this.password == ''){
      setTimeout(() => this.router.navigate(["trip"]));
    }else {
      alert("Your Account Created Successfully");
    }
  }
}
