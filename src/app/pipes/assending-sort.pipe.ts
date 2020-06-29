import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'assendingSort'
})
export class AssendingSortPipe implements PipeTransform {

  transform(items: any[],  field:string): any[] {
    if (!items) return [];
    if (!field) return  items;
    if (field == '' || field == null) return items;
     return items.sort((a: any, b: any) => {
      if (a[field] < b[field]) {
          return -1;
      } else if (a[field] > b[field]) {
          return 1;
      } else {
          return 0;
      }
  });    
  }

}
