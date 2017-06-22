import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Holiday } from './holiday';

@Injectable()
export class HolidayService {
  // private key = 'ec7db08d-c51d-4e63-8129-2d5abbd25f28'; //test key
  private key = '198f4d73-96be-4a0b-adb9-2f80640e2c6e'; // real key, limit 500 per month

  private holidaysUrl = 'https://holidayapi.com/v1/holidays?key=' + this.key + '&country=US&year=2015';  // URL to web api
  
  constructor(private http: Http) { }

  getHolidays(): Promise<Holiday[]> {
    return this.http.get(this.holidaysUrl)
                    .toPromise()
                    .then(function(response){
                      let arr = [];
                      let holidays = response.json().holidays;
                      let id = 0;
                      for (let i in holidays) {
                        for (let j in holidays[i]) {
                          // holiday name is not unique; add "id" for this purpose
                          holidays[i][j]["id"] = id++;
                          arr.push(holidays[i][j]);
                        }
                      }
                      return arr as Holiday[];
                    })
                    .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

  getHoliday(id: number): Promise<Holiday> {
    return this.getHolidays()
               .then(holidays => holidays.find(holiday => holiday.id === id));
  }
}