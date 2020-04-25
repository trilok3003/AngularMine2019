import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-image-load-in-canvas',
  templateUrl: './image-load-in-canvas.component.html',
  styleUrls: ['./image-load-in-canvas.component.css']
})
export class ImageLoadInCanvasComponent implements OnInit {
  @ViewChild("myCanvas", {static: true}) myCanvas: ElementRef;
  image = new Image();
  constructor() { }

  ngOnInit() {
    this.image.src = "https://picsum.photos/200/300";
    let ctx: CanvasRenderingContext2D =
    this.myCanvas.nativeElement.getContext('2d');
    ctx.fillRect(20, 20, 150, 100);
    this.image.onload = () => {
      console.log("image has loaded!");
       ctx.drawImage(this.image, 100, 100); }
  }

}
