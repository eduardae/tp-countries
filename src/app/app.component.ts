import { Component, OnInit } from '@angular/core';
import { CountryService } from './country.service';
import { State } from './models/state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'paesi-app';

  selectedCountry: State = new State();
  public paesi: any;

  constructor(private countryService: CountryService) {

  }

  ngOnInit() {

  }


  manageCountrySelect(country: State) {
    this.selectedCountry = country;
  }
}
