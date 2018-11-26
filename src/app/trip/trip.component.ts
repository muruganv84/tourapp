import { Component } from '@angular/core';
import { Routes, RouterModule, Router, ActivatedRoute } from "@angular/router";



@Component({
  selector: 'app-trip',
  templateUrl: './trip.component.html',
  styleUrls: ['./trip.component.css']
})
export class TripComponent {

  constructor(private router : Router) {
  }

  username : string
  password : string

  login() : void {
    if(this.username == 'Chennai' && this.password == 'Trichy'){
      setTimeout(() => this.router.navigate(["plan"]));
    }else {
      alert("Invalid credentials");
    }
  }
}
