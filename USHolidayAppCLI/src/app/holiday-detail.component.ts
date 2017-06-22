import 'rxjs/add/operator/switchMap';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location }               from '@angular/common';

import { Holiday } from './holiday';
import { HolidayService } from './holiday.service';

@Component({
  selector: 'holiday-detail',
  templateUrl: './holiday-detail.component.html',
  styleUrls: [ './holiday-detail.component.css' ]
})
export class HolidayDetailComponent implements OnInit {
  holiday: Holiday;

  constructor(
    private holidayService: HolidayService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.route.params
      .switchMap((params: Params) => this.holidayService.getHoliday(+params['id']))
      .subscribe(holiday => this.holiday = holiday);
  }

  goBack(): void {
    this.location.back();
  }
}