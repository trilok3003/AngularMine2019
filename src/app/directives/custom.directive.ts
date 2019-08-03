import { Directive, ElementRef, Renderer2, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appCustom]'
})
export class CustomDirective implements OnInit{
   @Input() appCustom:string;
   @Input() color:string
  constructor(public ele:ElementRef,public renderer: Renderer2) {
   }
   ngOnInit() {
    this.renderer.setStyle(this.ele.nativeElement,'background',this.appCustom);
    this.renderer.setStyle(this.ele.nativeElement,'color',this.color);    
   }

}
