import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(items: any, key: any): any {
    items.sort((pre, cur) => {
     if(pre[key] < cur[key]) {
       return -1
     }
     else if (pre[key] > cur[key]) {
       return 1;
     } 
     else {
       return 0;
     }
  });
  return items;
  }

}
