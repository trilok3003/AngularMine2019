import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'uniqueObjectInArray'
})
export class UniqueObjectInArrayPipe implements PipeTransform {

  transform(items: any[],  field:string): any[] {
    if (!items) return [];
    if (!field) return  items;
    if (field == '' || field == null) return items;
    return  items
    .map(e => e[field])
   // store the keys of the unique objects
  .map((e, i, final) => final.indexOf(e) === i && i)
  // eliminate the dead keys & store unique objects
  .filter(e => items[e]).map(e => items[e]);    
  }
}
