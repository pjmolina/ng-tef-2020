import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {
  @Input() city: string;
  @Input() temperature: number;
  @Output() temperatureChange = new EventEmitter();

  imagen: string;

  constructor() { }

  ngOnInit(): void {
    this.calcularImagen();
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
    this.temperatureChange.emit();
  }
  bajarTemperatura(): void {
    this.temperature--;
    this.calcularImagen();
    this.temperatureChange.emit();
  }

}
