import { Currency } from "./currency";
import { Language } from "./language";
import { RegionalBloc } from "./regional-block";
import { Translations } from "./translation";

export class State {
  name!: string;
  topLevelDomain: string[] = [];
  alpha2Code!: string;
  alpha3Code!: string;
  callingCodes: string[] = [];
  capital!: string;
  altSpellings: string[] = [];
  region!: string;
  subregion!: string;
  population!: number;
  latlng: number[] = [];
  demonym!: string;
  area?: number;
  gini?: number;
  timezones: string[] = [];
  borders: string[] = [];
  nativeName!: string;
  numericCode?: string;
  currencies: Currency[] = [];
  languages: Language[] = [];
  translations!: Translations;
  flag!: string;
  regionalBlocs: RegionalBloc[] = [];
  cioc?: string;
}
