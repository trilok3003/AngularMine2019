import { Component, OnInit, Directive, ElementRef, Renderer2, AfterViewInit, ViewChild } from '@angular/core';
import { TextDirective } from 'src/app/directives/text.directive';
import { AngularAsyncPipeComponent } from '../angular-async-pipe/angular-async-pipe.component';

@Component({
  selector: 'app-angular-viewchild',
  templateUrl: './angular-viewchild.component.html',
  styleUrls: ['./angular-viewchild.component.css']
})
export class AngularViewchildComponent implements OnInit, AfterViewInit {
   extra: string;
   @ViewChild(TextDirective,{static: true}) set setText(directive: TextDirective) {
     this.extra = directive.some;
   }
   @ViewChild('someInput', {static: false}) someInput: ElementRef;
   @ViewChild(AngularAsyncPipeComponent, {static: true}) child: AngularAsyncPipeComponent
  constructor() { }

  ngOnInit() {
  }
  ngAfterViewInit() {
    console.log(this.extra)
    this.someInput.nativeElement.value = "hello";
    //console.log(this.child.hello);
  }
}
