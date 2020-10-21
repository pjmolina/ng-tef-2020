import { Pipe, PipeTransform } from '@angular/core';

/**
 * Currency Pipe.
 * recibe un cantidad de dinero.
 * Como argumento recibe un nombre de moneda
 * Formetea segun las reglas de la moneda.
 * 123,456  'EUR'    ->      123,46 €
 * 123,456  'USD'    ->      $ 123.46
 */
@Pipe({
  name: 'currency'
})
export class CurrencyPipe implements PipeTransform {

  transform(value: number, currency: string): unknown {
    if (!value) {
      return '-';
    }
    switch (currency) {
      case 'EUR':
        return (value.toFixed(2) + ' €').replace('.', ',');
      case 'USD':
        return ('$ ' + value.toFixed(2));
      default:
        return value.toFixed(2) + ' ' + (currency ? currency : '');
    }
  }
}
