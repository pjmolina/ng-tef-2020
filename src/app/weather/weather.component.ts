import { Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges } from '@angular/core';
import { LoggerService } from '../services/logger.service';
import { WeatherStateService } from '../services/weather-state.service';

export interface TemperatureChangeEvent {
  city: string;
  temperature: number;
}

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss'],
  providers: [  ]
})
export class WeatherComponent implements OnInit, OnChanges, OnDestroy {
  @Input() city: string;
  @Input() temperature: number;
  @Output() temperatureChange = new EventEmitter<TemperatureChangeEvent>();

  imagen: string;

  // private _numberOfCities: number;ç

  get numberOfCities(): number {
    return this.stateService.getCities().length;
  }
  // set numberOfCities(n: number) {
  //   this._numberOfCities = n;
  // }

  constructor(
    private logger: LoggerService,
    private stateService: WeatherStateService
    ) {

    this.logger.log('1 constructor');
    // No: llamadas red
  }

  ngOnInit(): void {
    this.logger.log('2 ngOnInit');
      // SI: llamadas red (servicios)

    this.stateService.addCity(this.city);

    // this.numberOfCities = this.stateService.getCities().length;

    this.calcularImagen();
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.logger.log('ngOnChanges ' + changes);
  }

  ngOnDestroy(): void {
    // liberar recursos
    this.logger.log('3 ngOnDestroy');
  }

  calcularImagen(): void {
    if (this.temperature < 0) {
      this.imagen = 'https://cazatormentas.com/wp-content/uploads/copos1.jpeg';
    } else {
      this.imagen = 'https://www.flaticon.es/svg/static/icons/svg/890/890347.svg';
    }
  }

  subirTemperatura(): void {
    this.temperature++;
    this.calcularImagen();
    this.temperatureChange.emit({
      city: this.city,
      temperature: this.temperature
    });
  }
  bajarTemperatura(): void {
    this.temperature--;
    this.calcularImagen();
    this.temperatureChange.emit({
      city: this.city,
      temperature: this.temperature
    });
  }

}
