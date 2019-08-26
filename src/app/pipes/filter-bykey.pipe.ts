import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterBykey'
})
export class FilterBykeyPipe implements PipeTransform {

  transform(items: any[], value: string, key:string): any[] {
    if (!items) return [];
    if (!value) return  items;
    if (value == '' || value == null) return [];
    return items.filter(e => e[key].toLowerCase().indexOf(value) > -1 );
    
  }

}
