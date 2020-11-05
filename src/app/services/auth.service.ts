import { Injectable } from '@angular/core';
import { Session } from 'protractor';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { SessionService } from './session.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private session: SessionService) { }

  userIsAuthentated(): Observable<boolean> {
    return of(true).pipe(
      delay(5000)
    );
  }

  login(user: string, pass: string): Observable<SessionService> {
    if (user.startsWith('a') && pass === '1234') {
      this.session.name = user;
      this.session.roles = ['Admin'];
      this.session.tokenJwt = 'qweiqwueiqui';
      this.session.isAutenticated = true;
      return of(this.session);
    } else {
      this.session.name = null;
      this.session.roles = [];
      this.session.tokenJwt = null;
      this.session.isAutenticated = false;
      return of(this.session);
    }
  }
}
