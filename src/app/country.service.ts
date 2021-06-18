import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  private REST_JSON_URL: string = 'https://restcountries.eu/rest/v2/';

  // Dipendence Injection di Angular
  constructor(private http: HttpClient) {
  }

  getCountries() {
    return this.http.get(this.REST_JSON_URL + 'all');

  }
  getCountry(code: String) {
    return this.http.get(this.REST_JSON_URL + 'alpha/' + code);
  }
}

