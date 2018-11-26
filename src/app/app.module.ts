import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{FormsModule} from '@angular/forms';
import{HttpModule} from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';



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


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    SigninComponent,
    SignupComponent,
    TripComponent,
    PlanComponent,
    Header2Component,
    GuideComponent,
    TrackComponent,
    Header3Component,
    GuideLoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule

   ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
