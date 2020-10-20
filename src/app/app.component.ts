import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app012zz';
  heading = 'Lema 11';

  cambioTemperaturaEnTeruel(): void {
    console.log(' Cambio de temperatura en Teruel');
  }
  cambioTemperaturaEnAlicante(): void {
    console.log(' Cambio de temperatura en Alicante');
  }

}
