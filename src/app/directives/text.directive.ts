import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appText]'
})
export class TextDirective {
  some = 'message';
  constructor(ele: ElementRef, renderer: Renderer2) {
    let other = renderer.createText('Hello');
    renderer.appendChild(ele.nativeElement, other)
  }

}

