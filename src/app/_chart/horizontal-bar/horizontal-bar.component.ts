import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-horizontal-bar',
  templateUrl: './horizontal-bar.component.html',
  styleUrls: ['./horizontal-bar.component.css']
})
export class HorizontalBarComponent implements OnInit, AfterViewInit {
  @ViewChild("myCanvas", { static: true }) myCanvas: ElementRef;
  width = 900;
  height = 600;
  colors = ['#003f5c', '#58508d', '#bc5090', '#ff6361', '#ffa600'];
  configs = [
    {color: '#003f5c', value: 120},
    {color: '#58508d', value: 40},
    {color: '#bc5090', value: 100},
    {color: '#ff6361', value: 70},
    {color: '#ffa600', value: 80}
  ]
  constructor() { }

  ngOnInit() {
  }
  ngAfterViewInit() {
    this. draw();
  }
  reset() {
    let ctx: CanvasRenderingContext2D = this.myCanvas.nativeElement.getContext('2d');
    ctx.clearRect(0, 0, this.width, this.height);
  }
  draw() {
    let ctx: CanvasRenderingContext2D = this.myCanvas.nativeElement.getContext('2d');
    ctx.clearRect(0, 0, this.width, this.height);
     let start = 10
    this.configs.forEach(ele => {
    this.drawBar(ctx, start,10, ele.value, 40, ele.color);
    start = start + ele.value
    })
  }
  drawMany() {
    let ctx: CanvasRenderingContext2D = this.myCanvas.nativeElement.getContext('2d');
    ctx.clearRect(0, 0, this.width, this.height);
    let up = 10;
     [1,2,3,4].forEach(row => {
     let start = 10;
      this.configs.forEach(ele => {
        this.drawBar(ctx, start,up, ele.value, 40, ele.color);
        start = start + ele.value
        })
        up = up + 100
     })
  }
  drawLine(ctx, startX, startY, endX, endY,color){
    ctx.save();
    ctx.strokeStyle = color;
    ctx.beginPath();
    ctx.moveTo(startX,startY);
    ctx.lineTo(endX,endY);
    ctx.stroke();
    ctx.restore();
}
drawBar(ctx, upperLeftCornerX, upperLeftCornerY, width, height,color){
  ctx.save();
  ctx.fillStyle=color;
  ctx.fillRect(upperLeftCornerX,upperLeftCornerY,width,height);
  ctx.restore();
}
}
