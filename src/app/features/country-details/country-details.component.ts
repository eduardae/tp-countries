import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CountryService } from 'src/app/country.service';
import { State } from 'src/app/models/state';

@Component({
  selector: 'app-country-details',
  templateUrl: './country-details.component.html',
  styleUrls: ['./country-details.component.scss']
})
export class CountryDetailsComponent implements OnInit {

  country: any;
  @Input('code')
  code!: String;

  constructor(private countryService: CountryService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params
      .subscribe(params => {
        this.countryService.getCountry(params.id).subscribe(data =>
          this.country = data
        );
      });
  }

}
