import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { WeatherComponent } from './weather/weather.component';
import { MinusculasPipe } from './pipes/minusculas.pipe';
import { CurrencyPipe } from './pipes/currency.pipe';
import { SearchByPipe } from './pipes/search-by.pipe';
import { MyHighlightDirective } from './directives/my-highlight.directive';
import { PlaceListComponent } from './places/place-list/place-list.component';
import { routes } from './app-routes';
import { HelloComponent } from './hello/hello.component';
import { PlaceDetailComponent } from './places/place-detail/place-detail.component';
import { StartComponent } from './start/start.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { RoleDirective } from './directives/role.directive';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    WeatherComponent,
    MinusculasPipe,
    CurrencyPipe,
    SearchByPipe,
    MyHighlightDirective,
    PlaceListComponent,
    HelloComponent,
    PlaceDetailComponent,
    StartComponent,
    NotFoundComponent,
    RoleDirective,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule
  ],
  providers: [
    // { provide: LoggerService, useClass: LoggerDummyService }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
