import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { environment } from 'src/environments/environment';
import { Place } from '../domain/place';


@Injectable({
  providedIn: 'root'
})
export class PlaceService {

  constructor(private http: HttpClient) { }

  getPlaces(): Observable<Place[]> {
    const url = environment.serverUrl + environment.getPlacesUri;
    const user = environment.user;
    const pass = environment.pass;
    const basicAuth = buildBasicAuth(user, pass);

    return this.http.get(url, { headers: {
      authorization: basicAuth,
      // powerBy: 'Angular'
    } }).pipe(
      map(r => toPlaces(r)),
      catchError(e => {
        console.log(e);
        return throwError({ message: 'No autorizado', status: e.status});
      })
    );
  }

  // getPlaces(): Promise<Place[]> {
  //   const url = environment.serverUrl + environment.getPlacesUri;
  //   const user = environment.user;
  //   const pass = environment.pass;
  //   const basicAuth = buildBasicAuth(user, pass);

  //   return this.http.get(url, { headers: {
  //     authorization: basicAuth,
  //     // powerBy: 'Angular'
  //   } }).pipe(
  //     map(r => toPlaces(r))
  //   ).toPromise();
  // }

}

function toPlaces(r: any): Place[] {
  if (!r) {
    return null;
  }
  return r.map(it => toPlace(it));
}
function toPlace(raw: any): Place {
  const res = raw as Place;
  // if (res.image != null) {
  //   res.image = environment.serverUrl + res.image;
  // }
  res.image = res.image ? environment.serverUrl + res.image : null;
  return res;
}

function buildBasicAuth(user: string, pass: string): string {
  return 'Basic ' + btoa(user + ':' + pass);
}
