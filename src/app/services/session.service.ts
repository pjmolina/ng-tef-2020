import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SessionService {
  name = null;
  isAutenticated = false;
  tokenJwt = null;

  roles$: Observable<string[]>;
  private roleSubject: Subject<string[]>;

  private _roles: string[] = [];

  get roles(): string[] {
    return this._roles || [];
  }
  set roles(roles: string[]) {
    this._roles = roles || [];
    this.roleSubject.next(this._roles);
  }

  constructor() {
    this.roleSubject = new Subject<string[]>();
    this.roles$ = this.roleSubject;
  }

  get isAuthencated(): boolean {
    return this.name !== null && this.tokenJwt !== null;
  }

  hasRole(role: string): boolean {
    return this._roles.includes(role);
  }
  canExecute(role: string, operation: string): boolean {
    return true;
  }


}
