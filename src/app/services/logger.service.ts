import { Injectable } from '@angular/core';

export interface ILogger {
  log(msg: any): void;
  error(msg: any): void;
  warn(msg: any): void;
}

@Injectable({ providedIn: 'root' })
export class LoggerService  {
  constructor() {}

  log(msg: any): void {
    console.log(msg);
  }
  error(msg: any): void {
    console.error(msg);
  }
  warn(msg: any): void {
    console.warn(msg);
  }
}

export class LoggerDummyService  {
  constructor() {}

  log(msg: any): void {
    console.log('Nada');
  }
  error(msg: any): void {
    console.error('Nada');
  }
  warn(msg: any): void {
    console.warn('Nada');
  }
}
