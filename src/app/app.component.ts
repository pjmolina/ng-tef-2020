import { Component } from '@angular/core';
import { WeatherStateService } from './services/weather-state.service';
import { TemperatureChangeEvent } from './weather/weather.component';

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

  ciudad1 = 'Zamora';

  cambioTemperatura(t: TemperatureChangeEvent): void {
    // const msg = 'Cambio de temperatura en ' + t.city + ' : ' + t.temperature;
    const msg = `Cambio de temperatura en ${t.city}: ${t.temperature}ºC`;

    // console.log(' Cambio de temperatura en ' + t.city + ' : ' + t.temperature);
    this.log.push(msg);
  }

}
