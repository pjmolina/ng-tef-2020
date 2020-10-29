import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Place } from '../domain/place';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class PlaceService {

  constructor(private http: HttpClient) { }

  getPlaces(): Promise<Place[]> {
    const url = environment.serverUrl + environment.getPlacesUri;
    const user = environment.user;
    const pass = environment.pass;
    const basicAuth = buildBasicAuth(user, pass);

    return this.http.get(url, { headers: {
      authorization: basicAuth,
      // powerBy: 'Angular'
    } }).pipe(
      map(r => toPlaces(r))
    ).toPromise();
  }
}

function toPlaces(r: any): Place[] {
  return r as Place[];
}
function buildBasicAuth(user: string, pass: string): string {
  return 'Basic ' + btoa(user + ':' + pass);
}
