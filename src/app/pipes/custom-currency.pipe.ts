import { Pipe, PipeTransform } from '@angular/core';
import { CurrencyPipe } from '@angular/common';

@Pipe({
  name: 'indCurrency'
})
export class CustomCurrencyPipe extends CurrencyPipe implements PipeTransform {

  transform(value: any, ...args: any): any {
    return super.transform(value, "₹ ", 'symbol', '1.0')
  }

}
