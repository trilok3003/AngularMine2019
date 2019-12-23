import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { AnimationBuilder, AnimationStyleMetadata, AnimationAnimateMetadata, style } from '@angular/animations';

@Component({
  selector: 'app-custom-slider',
  templateUrl: './custom-slider.component.html',
  styleUrls: ['./custom-slider.component.css']
})
export class CustomSliderComponent implements OnInit, AfterViewInit {
  @ViewChild('myDiv', {static: true}) el: ElementRef;
  position = 0;
  player;
  constructor(private _builder: AnimationBuilder) { }

  ngOnInit() {
  }
  ngAfterViewInit() {

  }
  moveTo(value) {
  this.position = value;
  this.player = this._builder.build(this.moveXTo(100, value + 'px')).create(this.el.nativeElement, {});
  this.player.play();
  }
  moveXTo(time: number, to: string): (AnimationStyleMetadata | AnimationAnimateMetadata) [] {
      return [style({transform: 'translateX(' + to + ')' })]
  }
  pan(evt) {
    this.moveTo(this.position + (evt.deltaX / 10));
  }

}
