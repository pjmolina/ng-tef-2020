import { Routes } from '@angular/router';

import { HelloComponent } from './hello/hello.component';
import { PlaceDetailComponent } from './places/place-detail/place-detail.component';
import { PlaceListComponent } from './places/place-list/place-list.component';
import { StartComponent } from './start/start.component';

export const routes: Routes = [
  { path: '', component: StartComponent },
  { path: 'hello', component: HelloComponent },
  { path: 'places', component: PlaceListComponent },
  { path: 'place/:id', component: PlaceDetailComponent },
];

