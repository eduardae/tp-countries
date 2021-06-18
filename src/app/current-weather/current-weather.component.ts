import { Component, Input, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';
@Component({
  selector: 'app-current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.scss']
})
export class CurrentWeatherComponent implements OnInit {
  @Input()
  loc!: string;
  currentWeather: any = <any>{};
  msg: string | undefined;
  constructor(
    private weatherService: WeatherService
  ) {
  }
  ngOnInit() {
    this.searchWeather(this.loc);
  }
  searchWeather(loc: string) {
    this.msg = '';
    this.currentWeather = {};
    this.weatherService.getCurrentWeather(loc)
      .subscribe(res => {
        this.currentWeather = res;
      }, err => {
        if (err.error && err.error.message) {
          alert(err.error.message);
          this.msg = err.error.message;
          return;
        }
        alert('Failed to get weather.');
      }, () => {
      })
  }
  resultFound() {
    return Object.keys(this.currentWeather).length > 0;
  }
}
