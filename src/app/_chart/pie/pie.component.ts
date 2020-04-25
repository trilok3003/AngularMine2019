import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-pie',
  templateUrl: './pie.component.html',
  styleUrls: ['./pie.component.css']
})
export class PieComponent implements OnInit, AfterViewInit {
  @ViewChild("myCanvas", { static: true }) myCanvas: ElementRef;
  values;
  width = 400;
  height = 400;
  constructor() { }

  ngOnInit() {
  }
  ngAfterViewInit() {
    this.separateSlices();
  }
  pieSlice() {
    this.reset();
    let ctx: CanvasRenderingContext2D = this.myCanvas.nativeElement.getContext('2d');

    
    // Our angle
    var angle = Math.PI * 0.3;
    
    // Start a new path
    ctx.beginPath();
    
    // Go to center of the Chart
    ctx.moveTo(200, 200);
    
    // Draw an Arc
    // arc(centerX, centerY, radius, angleStart, angleEnd)
    ctx.arc(200, 200, 120, 0, angle);
    
    // Draw a line to close the pie slice
    ctx.lineTo(200, 200);
    
    // Print the path
    ctx.stroke();
  }
  entireSlices() {
    this.reset();
    let ctx: CanvasRenderingContext2D = this.myCanvas.nativeElement.getContext('2d');

    
    // Colors
    var colors = ['#4CAF50', '#00BCD4', '#E91E63', '#FFC107', '#9E9E9E', '#CDDC39'];
    
    // List of Angles
    var angles = [Math.PI * 0.3, Math.PI * 0.7, Math.PI * 0.2, Math.PI * 0.4, Math.PI * 0.4];
    
    // Temporary variables, to store each arc angles
    var beginAngle = 0;
    var endAngle = 0;
    
    // Iterate through the angles
    for(var i = 0; i < angles.length; i = i + 1) {
      // Begin where we left off
      beginAngle = endAngle;
      // End Angle
      endAngle = endAngle + angles[i];
      
      ctx.beginPath();
      // Fill color
      ctx.fillStyle = colors[i % colors.length];
      
      // Same code as before
      ctx.moveTo(200, 200);
      ctx.arc(200, 200, 120, beginAngle, endAngle);
      ctx.lineTo(200, 200);
      ctx.stroke();
      
      // Fill
      ctx.fill();
    }
  }
  separateSlices() {
    this.reset();
    let ctx: CanvasRenderingContext2D = this.myCanvas.nativeElement.getContext('2d');

    
    var colors = ['#4CAF50', '#00BCD4', '#E91E63', '#FFC107', '#9E9E9E', '#CDDC39', '#18FFFF', '#F44336', '#FFF59D', '#6D4C41'];
    var angles = [Math.PI * 0.3, Math.PI * 0.7, Math.PI * 0.2, Math.PI * 0.4, Math.PI * 0.4];
    
    // Base offset distance of 10
    var offset = 10;
    var beginAngle = 0;
    var endAngle = 0;
    
    // Used to calculate the X and Y offset
    var offsetX, offsetY, medianAngle;
    
    for(var i = 0; i < angles.length; i = i + 1) {
      beginAngle = endAngle;
      endAngle = endAngle + angles[i];
      
      // The medium angle is the average of two consecutive angles
      medianAngle = (endAngle + beginAngle) / 2;
      
      // X and Y calculations
      offsetX = Math.cos(medianAngle) * offset;
      offsetY = Math.sin(medianAngle) * offset;
      
      ctx.beginPath();
      ctx.fillStyle = colors[i % colors.length];
      
      // Adding the offsetX and offsetY to the center of the arc
      ctx.moveTo(200 + offsetX, 200 + offsetY);
      ctx.arc(200 + offsetX, 200 + offsetY, 120, beginAngle, endAngle);
      ctx.lineTo(200 + offsetX, 200 + offsetY);
      ctx.stroke();
      ctx.fill();
    }
  }
  reset() {
    let ctx: CanvasRenderingContext2D = this.myCanvas.nativeElement.getContext('2d');
    ctx.clearRect(0, 0, this.width, this.height);
  }
}
