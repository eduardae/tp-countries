import { Component, OnInit } from '@angular/core';
import { State } from 'src/app/models/state';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  selectedCountry: State | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
