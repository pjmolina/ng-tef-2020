import { Routes } from '@angular/router';
import { AccessControlGuard } from './access-control.guard';
import { AuthGuard } from './auth.guard';

import { HelloComponent } from './hello/hello.component';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { PlaceDetailComponent } from './places/place-detail/place-detail.component';
import { PlaceListComponent } from './places/place-list/place-list.component';
import { StartComponent } from './start/start.component';

export const routes: Routes = [
  { path: '', component: StartComponent, canActivate: [ AuthGuard ]    },
  { path: 'login', component: LoginComponent },
  { path: 'hello', component: HelloComponent, canActivate: [ AccessControlGuard ] },
  { path: 'places', component: PlaceListComponent },
  { path: 'place/:id', component: PlaceDetailComponent },
  { path: 'admin', component: HelloComponent, canActivateChild: [ AuthGuard ],
    children: [
      { path: 'a', component: PlaceListComponent },
      { path: 'b', component: PlaceListComponent },
      { path: 'c', component: PlaceListComponent },
    ]
  },
  { path: '**', component: NotFoundComponent }
];


