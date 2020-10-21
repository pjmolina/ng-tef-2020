import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { WeatherComponent } from './weather/weather.component';
import { MinusculasPipe } from './pipes/minusculas.pipe';
import { CurrencyPipe } from './pipes/currency.pipe';
import { SearchByPipe } from './pipes/search-by.pipe';

@NgModule({
  declarations: [
    AppComponent,
    WeatherComponent,
    MinusculasPipe,
    CurrencyPipe,
    SearchByPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    // { provide: LoggerService, useClass: LoggerDummyService }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
