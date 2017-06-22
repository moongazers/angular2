import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule }    from '@angular/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MdButtonModule} from '@angular/material';
import {MdListModule} from '@angular/material';

import { AppComponent }  from './app.component';
import { HolidayService } from './holiday.service';
import { HolidayDetailComponent } from './holiday-detail.component';
import { HolidaysComponent } from './holidays.component';

import { AppRoutingModule }     from './app-routing.module';



@NgModule({
  imports:      [ 
    BrowserModule,
    HttpModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MdButtonModule,
    MdListModule
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
