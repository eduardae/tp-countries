import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './features/contact/contact.component';
import { CountryDetailsComponent } from './features/country-details/country-details.component';
import { CountryListComponent } from './features/country-list/country-list.component';

const routes: Routes = [
  { path: 'contact', component: ContactComponent },
  { path: 'country-list', component: CountryListComponent },
  { path: 'country-details/:id', component: CountryDetailsComponent },
  { path: '**', redirectTo: 'country-list' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
