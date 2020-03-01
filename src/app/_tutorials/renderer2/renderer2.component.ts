import { Component, OnInit, Renderer2, AfterViewInit , ViewChild, ElementRef} from '@angular/core';

@Component({
  selector: 'app-renderer2',
  templateUrl: './renderer2.component.html',
  styleUrls: ['./renderer2.component.css']
})
export class Renderer2Component implements OnInit, AfterViewInit {
  @ViewChild('test', {static: true}) test: ElementRef;
  @ViewChild('addButton', {static: true})   private animateThis: ElementRef;
  @ViewChild('changeStyle', {static: true})  private elRef1: ElementRef;
  @ViewChild('next', {static: true})  private elRef2: ElementRef;
  @ViewChild('parent', {static: true})  private elRef3: ElementRef;
  @ViewChild('listen', {static: true}) private elRef4: ElementRef;
  toggle = false; 
  count = 0; 
  constructor(private renderer: Renderer2, private elRef: ElementRef) { 
    
  }

  ngOnInit() {
    this.renderer.setStyle(this.elRef1.nativeElement, 'border', '1px solid red');
    this.renderer.addClass(this.elRef1.nativeElement, 'someClass');
    this.renderer.setAttribute(this.elRef1.nativeElement, 'value', 'trilok');
    this.renderer.setProperty(this.elRef1.nativeElement, 'disabled', 'disabled');
//     removeClass(el: any, name: string)
// removeAttribute(el: any, name: string, namespace?: string)
// removeStyle(el: any, style: string, flags?: RendererStyleFlags2);
const currentElement = this.elRef2.nativeElement;
const nextEl = this.renderer.nextSibling(currentElement);
this.renderer.addClass(nextEl, 'red');
const currentElement1 = this.elRef3.nativeElement;
const parent = this.renderer.parentNode(currentElement1);
this.renderer.addClass(parent, 'red');
  }
  ngAfterViewInit() {
    this.renderer.setStyle(this.test.nativeElement, 'backgroundColor', 'red');
    this.renderer.setStyle(this.test.nativeElement, 'color', 'white');
    this.renderer.createElement('p');


    this.renderer.listen(this.elRef4.nativeElement, 'mouseover', () => {
      this.toggle = !this.toggle;
      this.count++;
      const currentElement = this.elRef4.nativeElement;
      const firstText = this.renderer.createText('Hover to see new text! (Hover me)');
      const secondText = this.renderer.createText('Text changed! (Hover me)');
      const thirdText = this.renderer.createText('Reached maximum count!');

      this.renderer.selectRootElement(currentElement);
      if(this.count < 10){
          this.toggle ? this.renderer.appendChild(currentElement, secondText) : 
          this.renderer.appendChild(currentElement, firstText);
      } else {
          this.renderer.appendChild(currentElement, thirdText);
          this.count = 10;
      }

    });
  }
  addBtn() {
    const button = this.renderer.createElement('button'); 
    const buttonText = this.renderer.createText('This is a button');
    this.renderer.appendChild(button, buttonText);
    this.renderer.appendChild(this.animateThis.nativeElement, button);
  }
  addBtn1() {
    const button = this.renderer.createElement('button'); 
    const buttonText = this.renderer.createText('This is a button');
    const comment = this.renderer.createComment('createComment? Comment Created!');
    const parent = this.elRef.nativeElement.parentNode;
    const reference = this.elRef.nativeElement;
    this.renderer.appendChild(button, buttonText);
    this.renderer.insertBefore(parent, comment, reference )
    this.renderer.appendChild(this.animateThis.nativeElement, button);
  }
}
