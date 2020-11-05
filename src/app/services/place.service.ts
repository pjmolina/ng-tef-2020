import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';

import { environment } from 'src/environments/environment';
import { Place } from '../domain/place';


@Injectable({
  providedIn: 'root'
})
export class PlaceService {
  private cachePlaces: Place[] = null;
  private expiredAt: number;

  constructor(private http: HttpClient) { }

  getPlaces(): Observable<Place[]> {
    if (this.cachePlaces !== null && Date.now() < this.expiredAt) {
      return of(this.cachePlaces);
    }

    const url = environment.serverUrl + environment.getPlacesUri;
    const user = environment.user;
    const pass = environment.pass;
    const basicAuth = buildBasicAuth(user, pass);

    return this.http.get(url, {
      headers: {
        authorization: basicAuth,
        // powerBy: 'Angular'
      }
    }).pipe(
      map(r => toPlaces(r)),
      tap(r => {
        this.cachePlaces = r;
        this.expiredAt = Date.now() + 5 * 60 * 60 * 1000;
      }),
      catchError(e => {
        console.log(e);
        return throwError({ message: 'No autorizado', status: e.status});
      })
    );
  }

  getById(id: string): Observable<Place> {
    if (this.cachePlaces !== null && Date.now() < this.expiredAt) {
      return of(this.cachePlaces.find(it => it._id === id));
    }

    const url = environment.serverUrl + environment.getPlacesUri + '/' + encodeURIComponent(id);
    const user = environment.user;
    const pass = environment.pass;
    const basicAuth = buildBasicAuth(user, pass);

    return this.http.get(url, { headers: {
      authorization: basicAuth,
      // powerBy: 'Angular'
    } }).pipe(
      map(r => toPlace(r)),
      tap(r => {
        if (this.cachePlaces === null) {
          this.cachePlaces = [];
        }
        this.cachePlaces = this.cachePlaces.filter(it => it._id !== id);
        this.cachePlaces.push(r);
      }),
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
