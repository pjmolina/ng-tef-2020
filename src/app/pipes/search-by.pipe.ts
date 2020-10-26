import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchBy'
})
export class SearchByPipe implements PipeTransform {

  transform(data: any[], searchString: string = '', propertyName: string): any[] {
    if (!data) {
      return [];
    }
    return data.filter(
      it => (it[propertyName] || '').toLowerCase().includes(searchString.toLowerCase())
    );
  }
}
