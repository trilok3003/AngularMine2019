import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'uniqueInArray'
})
export class UniqueInArrayPipe implements PipeTransform {

  transform(items: any[]): any[] {
    if (!items) return [];
 return  items.filter((el, i, a) => i === a.indexOf(el))
  }
}
