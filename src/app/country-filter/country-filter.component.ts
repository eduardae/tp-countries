import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CountryFilter } from '../models/country-filter';
import { State } from '../models/state';

@Component({
  selector: 'app-country-filter',
  templateUrl: './country-filter.component.html',
  styleUrls: ['./country-filter.component.scss']
})
export class CountryFilterComponent implements OnInit {

  filterModel: CountryFilter;
  @Output()
  filterEvent: EventEmitter<[]> = new EventEmitter();

  @Input()
  countryList: State[];

  constructor() {
    this.filterModel = new CountryFilter();
    this.countryList = [];
  }

  ngOnInit(): void {
  }

  filter() {
    const filtered: any = [];
    for (let country of this.countryList) {
      let ok = true;
      if (this.filterModel.name) {
        if (ok && country.name.toUpperCase().indexOf(this.filterModel.name.toUpperCase()) !== -1) {
          ok = true;
        } else {
          ok = false;
        }
      }
      if (this.filterModel.code) {
        if (ok && country.alpha2Code.toUpperCase() == this.filterModel.code.toUpperCase()) {
          ok = true;
        } else {
          ok = false;
        }
      }

      country.area = country.area ? country.area : 0;
      if (this.filterModel.maxArea && this.filterModel.minArea) {
        if (ok && country.area && country.area <= this.filterModel.maxArea && country.area >= this.filterModel.minArea) {
          ok = true;
        } else {
          ok = false;
        }
      } else if (this.filterModel.maxArea) {
        if (ok && country.area <= this.filterModel.maxArea) {
          ok = true;
        } else {
          ok = false;
        }
      } else {
        if (ok && country.area >= this.filterModel.minArea) {
          ok = true;
        } else {
          ok = false;
        }
      }

      if (ok) {
        filtered.push(country);
      }
    }
    this.filterEvent.emit(filtered);
  }

  reset() {
    this.filterModel = new CountryFilter();
    this.filterEvent.emit(this.countryList as unknown as []);
  }

}
