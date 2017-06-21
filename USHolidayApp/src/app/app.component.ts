import { Component, OnInit } from '@angular/core';

import { Holiday } from './holiday';
import { HolidayService } from './holiday.service';

@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <router-outlet></router-outlet>
  `,
})
export class AppComponent  { 
  title = '2015 USA Holidays'; 
}
