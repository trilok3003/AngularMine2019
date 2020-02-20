import { Directive, HostListener } from '@angular/core';

export enum KeyCodes {
  ArrowUp = 'ArrowUp',
  ArrowDown = 'ArrowDown',
  ArrowRight = 'ArrowRight',
  ArrowLeft = 'ArrowLeft'
}

@Directive({
  selector: '[appArrowKeyScroll]'
})
export class ArrowKeyScrollDirective {
  constructor() { }
  @HostListener('keydown', ['$event'])
  keyEvent(event: KeyboardEvent) {
    if (
      event.key === KeyCodes.ArrowUp ||
      event.key === KeyCodes.ArrowDown ||
      event.key === KeyCodes.ArrowLeft ||
      event.key === KeyCodes.ArrowRight
    ) {
      event.preventDefault();
    }
  }
}
