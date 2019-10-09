import { Component, OnInit, Input, ViewChildren, QueryList, ViewChild, ContentChildren, ContentChild, Directive, HostBinding, HostListener } from '@angular/core';
// alert component
@Component({
  selector: 'alert',
  template: `
    <button class="alert alert-success" *ngIf="type==='success'">{{type}}</button>
    <button class="alert alert-danger" *ngIf="type==='danger'">{{type}}</button>
    <button class="alert alert-info" *ngIf="type==='info'">{{type}}</button>
  `,
})
export class Alert1Component {
  @Input() type: string = "success";
}
// tab component
@Component({
  selector: 'tab',
  template: `
    <p>{{title}}</p>
  `,
})
export class TabComponent {
  @Input() title;
}
//tabs compoent
@Component({
  selector: 'tabs',
  template: `
    <ng-content></ng-content>
  `,
})
export class TabsComponent {
 @ContentChildren(TabComponent) tabs: QueryList<TabComponent>
 @ContentChild("divElement",{static: true}) div:any
 
 ngAfterContentInit() {
   this.tabs.forEach(tabInstance => console.log(tabInstance));
   console.log(this.div);
 }
}
// hostbinding directive
@Directive({
  selector: '[host-binding]'
})
export class HostBindingDirective {
  @HostBinding("class.tooltip") tooltip = true;
  
  @HostBinding("class.tooltip") 
  get tooltipAsGetter() {
    // your logic
    return true;
  };
   
  @HostBinding() type = "text";
}
// hostListener directive
@Directive({
  selector: '[count]'
})
export class HostListenerDirective {
  numClicks = 0;
  numClicksWindow = 0;
  @HostListener("click", ["$event"])
  onclick(event) {
    console.log(this.numClicks++);
  }
  
  @HostListener("window:click", ["$event"]) //  @HostListener("document:click", ["$event"]), @HostListener("body:click", ["$event"])
  onClick(event) {
    console.log("Num clicks on the window:", this.numClicksWindow++);
  }
}
// app component
 
@Component({
  selector: 'app-decorators-examples',
  templateUrl: './decorators-examples.component.html',
  styleUrls: ['./decorators-examples.component.css']
})
export class DecoratorsExamplesComponent implements OnInit {
  type = 0;
  @ViewChildren(Alert1Component) alerts: QueryList<Alert1Component>
  @ViewChild(Alert1Component,{static: true}) alert: Alert1Component
  @ViewChild("divElement",{static: true}) div: any;
  
  ngAfterViewInit() {
    this.alerts.forEach(alertInstance => console.log(alertInstance));
    this.alerts.changes.subscribe(alertInstance => console.log(alertInstance));
      // This will return the component instance
    console.log('View Child', this.alert);
    // This will return the native element
    console.log('View div element', this.div);

  }
  constructor() {
   }

  ngOnInit() {
  }

}
