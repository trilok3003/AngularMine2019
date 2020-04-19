import { Component, OnInit, ViewChild, ViewContainerRef, ComponentRef, ComponentFactoryResolver, ComponentFactory, OnDestroy } from '@angular/core';
import { Xset4alertComponent } from './xset4alert/xset4alert.component';

@Component({
  selector: 'app-x-set4',
  templateUrl: './x-set4.component.html',
  styleUrls: ['./x-set4.component.css']
})
export class XSet4Component implements OnInit, OnDestroy {
  @ViewChild("alertContainer", { read: ViewContainerRef, static: true }) container;
  componentRef: ComponentRef<Xset4alertComponent>;
  isLoader: boolean = true;
  tempData = 'loading'
   constructor(private resolver: ComponentFactoryResolver) {}
   
   createComponent(type) {
     this.container.clear();
    //  const factory: ComponentFactory = this.resolver.resolveComponentFactory(Xset4alertComponent);
    const factory = this.resolver.resolveComponentFactory(Xset4alertComponent);
 
     this.componentRef = this.container.createComponent(factory);
     
     this.componentRef.instance.type = type;
 
     this.componentRef.instance.output.subscribe(event => console.log(event));
 
   }
   
     ngOnDestroy() {
       if(this.componentRef) {
        this.componentRef.destroy();    
       }
     }
  ngOnInit() {
  }

}
