import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SessionService {
  name = null;
  roles: string[] = [];
  isAutenticated = false;
  tokenJwt = null;

  constructor() { }

  get isAuthencated(): boolean {
    return name !== null && this.tokenJwt !== null;
  }

  hasRole(role: string): boolean {
    return this.roles.includes(role);
  }
  canExecute(role: string, operation: string): boolean {
    return true;
  }


}
