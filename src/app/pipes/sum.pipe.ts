import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sum'
})
export class SumPipe implements PipeTransform {

  transform(items: any[], key?: string, query?: string, value?: any): any[]{
    if(key) {
    const   sum = items.reduce((pre, cur) => 
    pre + cur[key], 0);
    return sum;
    }
    else {
      const   sum = items.reduce((pre, cur) => pre + cur, 0);
            return sum;
    }
  
  }
}
