import { Component } from '@angular/core';
import { Routes, RouterModule, Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-guide-login',
  templateUrl: './guide-login.component.html',
  styleUrls: ['./guide-login.component.css']
})
export class GuideLoginComponent {

  constructor(private router : Router) {
  }

  username : string
  password : string

  login() : void {
    if(this.username == 'guide' && this.password == 'guide'){
      setTimeout(() => this.router.navigate(["guide"]));
    }else {
      alert("Invalid credentials");
    }
  }
}

