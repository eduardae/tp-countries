import { Component, OnInit, AfterViewInit, ViewChild, ChangeDetectorRef } from '@angular/core';
import { MatSelectChange } from '@angular/material/select';
import { Router } from '@angular/router';
import { CountryService } from 'src/app/country.service';
import { State } from 'src/app/models/state';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.scss']
})
export class CountryListComponent implements OnInit {

  paesi: any;
  originalPaesi: any;
  selectedCountry?: State;
  dataSource: MatTableDataSource<any> = new MatTableDataSource([{}]);
  displayedColumns = ['flag', 'name', 'population', 'capital', 'topLevelDomain', 'timezones'];
  @ViewChild(MatSort, { static: false }) sort: MatSort;

  constructor(private countryService: CountryService, private router: Router, private cdr: ChangeDetectorRef) {
  }


  ngOnInit(): void {
    this.countryService.getCountries().subscribe(data => {
      this.paesi = data;
      this.originalPaesi = data;
      this.cdr.detectChanges();
      this.dataSource = new MatTableDataSource(this.paesi);
      this.dataSource.sort = this.sort;

    });
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  manageCountrySelect(event: MatSelectChange) {
    if (event) {
      this.router.navigate(['/country-details', (event as unknown as State).alpha2Code]);
    }
  }

  manageFilterEvent(paesi: any) {
    this.paesi = paesi;
    this.dataSource.data = this.paesi
  }

}
