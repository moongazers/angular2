import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule }    from '@angular/http';

import { AppComponent }  from './app.component';
import { HolidayService } from './holiday.service';
import { HolidayDetailComponent } from './holiday-detail.component';
import { HolidaysComponent } from './holidays.component';

import { AppRoutingModule }     from './app-routing.module';


@NgModule({
  imports:      [ 
    BrowserModule,
    HttpModule,
    AppRoutingModule
  ],
  declarations: [ 
    AppComponent,
    HolidaysComponent,
    HolidayDetailComponent 
  ],
  providers: [ HolidayService ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
