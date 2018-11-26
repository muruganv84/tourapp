import { Component } from '@angular/core';
import { Routes, RouterModule, Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-guide',
  templateUrl: './guide.component.html',
  styleUrls: ['./guide.component.css']
})
export class GuideComponent {

  constructor(private router : Router) {
  }

  username : string
  password : string

  login() : void {
    if(this.username == 'guide' && this.password == 'guide'){
      setTimeout(() => this.router.navigate(["guide"]));
    }else {
      alert("Your Information Saved Successfully");
    }
  }
}

