import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-bar',
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.css']
})
export class BarComponent implements OnInit {
  @ViewChild("myCanvas", { static: true }) myCanvas: ElementRef;
  values;
  width = 900;
  height = 600;
  config = [
    { y: 100, color: 'red' },
    { y: 300, color: 'green' },
    { y: 200, color: 'yellow' },
    { y: 400, color: 'blue' },
    { y: 500, color: 'black' },
    { y: 550, color: 'purple' }
  ]
  constructor() { }

  ngOnInit() {
    this.byJson();

  }
  reset() {
    let ctx: CanvasRenderingContext2D = this.myCanvas.nativeElement.getContext('2d');
    ctx.clearRect(0, 0, this.width, this.height);
  }
  draw() {
    this.reset();
    var values = this.values.split(',');

    let ctx: CanvasRenderingContext2D = this.myCanvas.nativeElement.getContext('2d');


    var width = 40; //bar width
    var X = 50; // first bar position 
    var base = 200;

    for (var i = 0; i < values.length; i++) {
      ctx.fillStyle = '#008080';
      var h = values[i];
      ctx.fillRect(X, this.height - h, width, h);

      X += width + 15;
      /* text to display Bar number */
      ctx.fillStyle = '#4da6ff';
      ctx.fillText('Bar ' + i, X - 50, this.height - h - 10);
    }
    /* Text to display scale */
    ctx.fillStyle = '#000000';
    ctx.fillText('Scale X : ' + this.width + ' Y : ' + this.height, 800, 10);

  }
  byJson() {
    this.reset();
    let ctx: CanvasRenderingContext2D = this.myCanvas.nativeElement.getContext('2d');
    var width = 40; //bar width
    var X = 50; // first bar position   
    for (var i = 0; i < this.config.length; i++) {
      ctx.fillStyle = this.config[i]['color'];
      var h = this.config[i]['y'];
      ctx.fillRect(X, this.height - h, width, h);

      X += width + 15;
      /* text to display Bar number */
      ctx.fillStyle = '#4da6ff';
      ctx.fillText('Bar ' + i, X - 50, this.height - h - 10);
    }
    /* Text to display scale */
    ctx.fillStyle = '#000000';
    ctx.fillText('Scale X : ' + this.width + ' Y : ' + this.height, 800, 10);

  }
}
