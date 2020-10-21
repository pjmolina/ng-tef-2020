import { Pipe, PipeTransform } from '@angular/core';
import { CityInfo } from '../app.component';

@Pipe({
  name: 'searchBy'
})
export class SearchByPipe implements PipeTransform {

  transform(data: CityInfo[], searchString: string = ''): CityInfo[] {
    if (!data) {
      return [];
    }
    return data.filter(
      it => (it.city || '').toLowerCase().includes(searchString.toLowerCase())
    );
  }

}
