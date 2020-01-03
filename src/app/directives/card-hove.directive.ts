import { Directive, ElementRef, Renderer, Input, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appCardHove]'
})
export class CardHoveDirective {

  @HostBinding('class.card-outline-primary') private ishovering: boolean;

  @Input('appCardHove') config: Object = {
    querySelector: '.card-text'
  };

  constructor(private el: ElementRef,
              private renderer: Renderer) {
    renderer.setElementStyle(el.nativeElement, 'backgroundColor', 'gray');
    renderer.setElementStyle(el.nativeElement, 'cursor', 'pointer');

  }

  @HostListener('mouseover') onMouseOver() {
    let part = this.el.nativeElement.querySelector(this.config['querySelector']);
    this.renderer.setElementStyle(part, 'display', 'block');
    this.ishovering = true;
  }

  @HostListener('mouseout') onMouseOut() {
    let part = this.el.nativeElement.querySelector(this.config['querySelector']);
    this.renderer.setElementStyle(part, 'display', 'none');
    this.ishovering = false;
  }

}
