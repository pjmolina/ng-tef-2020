import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { WeatherComponent } from './weather/weather.component';
import { LoggerDummyService, LoggerService } from './services/logger.service';

@NgModule({
  declarations: [
    AppComponent,
    WeatherComponent
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
