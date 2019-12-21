import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: 'textarea'
})
export class TextareaDirective {
  constructor(private el: ElementRef) { }

  @HostListener('keyup', ['$event.target'])
  autosize() {
    const el = this.el.nativeElement;
    setTimeout(function () {
      el.style.cssText = 'height:auto; padding:0';
      el.style.cssText = 'height:' + el.scrollHeight + 'px';
    }, 0);
  }

}
