import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
import localeIt from '@angular/common/locales/it';
import { ImageViewerComponent } from './image-viewer/image-viewer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GoogleMapsModule } from '@angular/google-maps';
import { ContactComponent } from './features/contact/contact.component';
import { CountryListComponent } from './features/country-list/country-list.component';
import { CountryDetailsComponent } from './features/country-details/country-details.component';
import { NavComponent } from './shared/nav/nav.component';
import { CountryService } from './country.service';
import { HttpClientModule } from '@angular/common/http';
import { CurrentWeatherComponent } from './current-weather/current-weather.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CountryFilterComponent } from './country-filter/country-filter.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatButtonModule } from '@angular/material/button';

registerLocaleData(localeFr, 'fr');
registerLocaleData(localeIt, 'it');

@NgModule({
  declarations: [
    AppComponent,
    ImageViewerComponent,
    ContactComponent,
    CountryListComponent,
    CountryDetailsComponent,
    NavComponent,
    CurrentWeatherComponent,
    CountryFilterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    GoogleMapsModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatProgressSpinnerModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    MatTableModule,
    MatSortModule,
    MatButtonModule
  ],
  providers: [CountryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
