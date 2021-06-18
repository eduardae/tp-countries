export class CountryFilter {
  name: string;
  latitude: number;
  longitude: number;
  code: string;
  minArea: number;
  maxArea: number;


  constructor() {
    this.name = '';
    this.latitude = 0;
    this.longitude = 0;
    this.code = '';
    this.minArea = 0;
    this.maxArea = 0;
  }
}
