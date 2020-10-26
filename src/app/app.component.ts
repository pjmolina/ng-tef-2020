import { Component } from '@angular/core';
import { WeatherStateService } from './services/weather-state.service';
import { TemperatureChangeEvent } from './weather/weather.component';

export interface CityInfo {
    city: string;
    temperature: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [ WeatherStateService ]
})
export class AppComponent {
  title = 'app012zz';
  heading = 'Lema 11';
  log: string[] = [];
  dinero = 12399.999;

  obj = {
    name: 'Pablo'
  };

  searchText = '';

  data: CityInfo[] = [
    { city: 'Teruel', temperature: -15 },
    { city: 'Zamora', temperature: -12 },
    { city: 'Valencia', temperature: 24 },
    { city: 'Alicante', temperature: 25 },
    { city: 'Madrid', temperature: -5 }
  ];

  cambioTemperatura(t: TemperatureChangeEvent): void {
    // const msg = 'Cambio de temperatura en ' + t.city + ' : ' + t.temperature;
    const msg = `Cambio de temperatura en ${t.city}: ${t.temperature}ºC`;

    // console.log(' Cambio de temperatura en ' + t.city + ' : ' + t.temperature);
    this.log.push(msg);
  }

}
