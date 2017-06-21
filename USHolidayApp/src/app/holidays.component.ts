import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

import { Holiday } from './holiday';
import { HolidayService } from './holiday.service';

@Component({
  selector: 'holidays-2015',
  templateUrl: './holidays.component.html',
  styleUrls: [ './holidays.component.css' ]
})
export class HolidaysComponent {
  holidays: Holiday[];
  selectedHoliday: Holiday;

  constructor(
    private router: Router,
    private holidayService: HolidayService) { }

  getHolidays(): void {
    this.holidayService.getHolidays().then(holidays => this.holidays = holidays);
  }

  ngOnInit(): void {
    this.getHolidays();
  }

  onSelect(holiday: Holiday): void {
    this.selectedHoliday = holiday;
    this.router.navigate(['/detail', this.selectedHoliday.id]);
  }
}