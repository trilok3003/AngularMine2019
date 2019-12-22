import { Directive, ElementRef } from '@angular/core';
@Directive({
  // selector: 'div,a,p,button,h1,h2,h3'
     selector: '[randomColor]'
})
export class RandomColorDirective {

  constructor(private el: ElementRef) {
    this.el.nativeElement.style.backgroundColor = this.getRandomColor();
  }

  getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

}
