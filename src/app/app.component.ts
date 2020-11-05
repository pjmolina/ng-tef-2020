import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { BehaviorSubject, from, fromEvent, ReplaySubject, Subject, Subscription } from 'rxjs';
import { throttleTime, buffer, map, filter, shareReplay, first, take } from 'rxjs/operators';
import { SessionService } from './services/session.service';
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
export class AppComponent implements OnInit, OnDestroy {
  @ViewChild('b1', { static: true }) btn: ElementRef;

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

  private sub1: Subscription;

  constructor(public session: SessionService) {}

  ngOnInit(): void {
    // obs frio
    // const obs$ = from([1, 2, 3]);

    // obs caliente
    const click$ = fromEvent(this.btn.nativeElement, 'click');
    const obs1$ = click$.pipe(
      buffer(click$.pipe(throttleTime(1000))),
      map(data => data.length),
      map(x => x * 10),
      filter(x => x > 30),
    );

    const subject = new BehaviorSubject<string>('42');
    const obs$ = subject.pipe(shareReplay(3));

    subject.next('Hola');

    this.sub1 = obs$.subscribe(
      d => {
        console.log('Consumidor 1:', d);
      },
      e => {
        console.log('Consumidor 1 Error:', e);
      },
      () => {
        console.log('Consumidor 1 Completado');
      }
    );



    subject.next('Adios');

    obs$.subscribe(
      d => {
        console.log('Consumidor 2:', d);
      }
    );


    obs$.subscribe(
      d => {
        console.log('Consumidor 3:', d);
      }
    );

    subject.next('Adios 3');


    // subject.error('Error 404');
    subject.complete();

  }

  ngOnDestroy(): void {
    if (this.sub1) {
      this.sub1.unsubscribe();
      this.sub1 = null;
    }
  }

  cambioTemperatura(t: TemperatureChangeEvent): void {
    // const msg = 'Cambio de temperatura en ' + t.city + ' : ' + t.temperature;
    const msg = `Cambio de temperatura en ${t.city}: ${t.temperature}ºC`;

    // console.log(' Cambio de temperatura en ' + t.city + ' : ' + t.temperature);
    this.log.push(msg);
  }

}
