import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CountryService } from 'src/app/country.service';
import { State } from 'src/app/models/state';

@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.scss']
})
export class CountryListComponent implements OnInit {

  paesi: any;
  originalPaesi: any;

  selectedCountry?: State;

  constructor(private countryService: CountryService, private router: Router) { }


  ngOnInit(): void {
    this.countryService.getCountries().subscribe(data => {
      this.paesi = data;
      this.originalPaesi = data
    });
  }

  manageCountrySelect(country: any) {
    this.selectedCountry = country;
    this.router.navigate(['/country-details', country.alpha2Code]);
  }

  manageFilterEvent(paesi: any) {
    this.paesi = paesi;
  }

}
