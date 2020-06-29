import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtered'
})
export class FilteredPipe implements PipeTransform {
  transform(items: any[], searchTerm: string, labelKey?: string): any {
    if (!items || !searchTerm) {
      return items;
    }

    return items.filter(
      item =>
        item[labelKey || 'label']
          .toLowerCase()
          .includes(searchTerm.toLowerCase()) === true
    );
  }
}