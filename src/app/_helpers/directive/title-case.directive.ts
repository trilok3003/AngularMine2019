import { Directive, HostListener } from '@angular/core';
import { NgControl } from '@angular/forms';
import { TitleCasePipe } from '@angular/common';

@Directive({
  selector: '[appTitleCase]'
})
export class TitleCaseDirective {

  constructor(public ngControl: NgControl, public titlecase: TitleCasePipe) {

   }
// Listen For Input Change
@HostListener('ngModelChange', ['$event']) onInputChange(value) {
  // Convert To Title Case using TitleCasePipe
  const titleCaseStr = this.titlecase.transform(value);
  this.ngControl.valueAccessor.writeValue(titleCaseStr);
}
// Convert Text to Title Case Using for…of loop

// @HostListener('ngModelChange', ['$event']) onInputChange(value) {
//   const arrStr = value.toLowerCase().split(' ');
//   const titleCaseArr: Array<any> = [];

//   for (const str of arrStr) {
//      titleCaseArr.push(str.charAt(0).toUpperCase() + str.slice(1));
//   }
  
//   this.ngControl.valueAccessor.writeValue(titleCaseArr.join(' '));
// }

// Convert text to Title Case using Array Map method

// @HostListener('ngModelChange', ['$event']) onInputChange(value) {
//   const arrStr = value.toLowerCase().split(' ');
//   const titleCaseStr = arrStr.map((str) => (str.charAt(0).toUpperCase() + str.slice(1))).join(' ');
  
//   this.ngControl.valueAccessor.writeValue(titleCaseStr);
// }
// Convert text to Title Case using Array Reduce method
// @HostListener('ngModelChange', ['$event']) onInputChange(value) {
//   const arrStr = value.toLowerCase().split(' ');
//   const titleCaseStr = arrStr.reduce((accumulatedStr, currentStr) => {
//         const spaceBetweenWords = (accumulatedStr ? ' ' : '');
//         return accumulatedStr += spaceBetweenWords + (currentStr.charAt(0).toUpperCase() + currentStr.slice(1));
//    }, '');
  
//   this.ngControl.valueAccessor.writeValue(titleCaseStr);
// }
}
