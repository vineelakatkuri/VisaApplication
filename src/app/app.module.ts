import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import {HeaderComponent} from './header/header.component';
import { VisaPayComponent } from './visa-pay/visa-pay.component';
import { PartnerUsComponent } from './partner-us/partner-us.component';
import { YourBusinessComponent } from './your-business/your-business.component';
import { VisaTravelComponent } from './visa-travel/visa-travel.component';
import { VisaEverywhereComponent } from './visa-everywhere/visa-everywhere.component';

@NgModule({
  declarations: [
  AppComponent,
  HeaderComponent,
  FooterComponent,
  VisaPayComponent,
  PartnerUsComponent,
  YourBusinessComponent,
  VisaTravelComponent,
  VisaEverywhereComponent
  ],
  imports: [
  BrowserModule,
  FormsModule,
  HttpModule,
  RouterModule.forRoot([
      {
        path:"visaPay",
        component:VisaPayComponent
      },
       {
        path:"partnerUs",
        component:PartnerUsComponent
      },
       {
        path:"yourBusiness",
        component:YourBusinessComponent
      },
       {
        path:"visaTravel",
        component:VisaTravelComponent
      },
      {
        path:"visaEveryWhere",
        component:VisaEverywhereComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
