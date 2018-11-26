import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { TripComponent } from './trip/trip.component';
import { PlanComponent } from './plan/plan.component';
import { Header2Component } from './header2/header2.component';
import { GuideComponent } from './guide/guide.component';
import { TrackComponent } from './track/track.component';
import { Header3Component } from './header3/header3.component';
import { GuideLoginComponent } from './guide-login/guide-login.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
      { path: 'signin', component: SigninComponent },
      { path: 'signup', component: SignupComponent },
      { path: 'home', component: HomeComponent },
      { path: 'trip', component: TripComponent },
      { path: 'plan', component: PlanComponent },
      { path: 'guide-login', component: GuideLoginComponent },
      { path: 'guide', component: GuideComponent },
      { path: 'plan', component: PlanComponent },
      { path: 'track', component: TrackComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }