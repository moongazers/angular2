import { Component } from '@angular/core';

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
