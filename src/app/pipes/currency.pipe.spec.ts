import { CurrencyPipe } from './currency.pipe';

/**
 * Currency Pipe.
 * recibe un cantidad de dinero.
 * Como argumento recibe un nombre de moneda
 * Formetea segun las reglas de la moneda.
 * 123,456  'EUR'    ->      123,46 €
 * 123,456  'USD'    ->      $ 123.46
 */
describe('CurrencyPipe', () => {
  it('create an instance', () => {
    const pipe = new CurrencyPipe();
    expect(pipe).toBeTruthy();
  });
  it('when passing 123,456 EUR  should return 123,46 €', () => {
    const sut = new CurrencyPipe();
    expect(sut.transform(123.456, 'EUR')).toBe('123,46 €');
  });
  it('when passing 123,456 USD  should return $ 123.46', () => {
    const sut = new CurrencyPipe();
    expect(sut.transform(123.456, 'USD')).toBe('$ 123.46');
  });
  it('when passing 123,456 YEN  should return 123.46', () => {
    const sut = new CurrencyPipe();
    expect(sut.transform(123.456, 'YEN')).toBe('123.46 YEN');
  });

  it('when passing null should return -', () => {
    const sut = new CurrencyPipe();
    expect(sut.transform(null, 'USD')).toBe('-');
  });
  it('when passing 123,456 without currency  should return 123.46', () => {
    const sut = new CurrencyPipe();
    expect(sut.transform(123.456, null)).toBe('123.46 ');
  });

});
