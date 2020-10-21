import { Injectable } from '@angular/core';

@Injectable()
export class WeatherStateService {
  cities: string[] = [];

  constructor() { }

  addCity(city: string): void {
    this.cities.push(city);
  }

  getCities(): string[] {
    return this.cities;
  }

}
