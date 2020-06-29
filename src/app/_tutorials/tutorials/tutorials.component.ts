import { Component, OnInit, ComponentFactoryResolver, ViewChild, ViewContainerRef } from '@angular/core';
import { DynamicAddRemoveComponent } from 'src/app/dynamic-add-remove/dynamic-add-remove.component';

@Component({
  selector: 'app-tutorials',
  templateUrl: './tutorials.component.html',
  styleUrls: ['./tutorials.component.css']
})
export class TutorialsComponent implements OnInit {
  live = true;
  @ViewChild('parent', { read: ViewContainerRef , static: true}) container: ViewContainerRef;
  constructor(private _cfr: ComponentFactoryResolver) { }


  ngOnInit() {
  }


  addComponent(){    
      var comp = this._cfr.resolveComponentFactory(DynamicAddRemoveComponent);
      var expComponent = this.container.createComponent(comp);
      expComponent.instance._ref = expComponent;
  }
}
