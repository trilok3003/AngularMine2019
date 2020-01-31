import { Component, OnInit, ViewChild, ViewContainerRef, ComponentFactoryResolver,ComponentRef,ComponentFactory, OnDestroy} from '@angular/core';
import { DynamicLoadMessageComponent } from '../dynamic-load-message/dynamic-load-message.component';

@Component({
  selector: 'app-dynamic-load',
  templateUrl: './dynamic-load.component.html',
  styleUrls: ['./dynamic-load.component.css']
})
export class DynamicLoadComponent implements OnInit, OnDestroy {
  @ViewChild('messagecontainer', {read: ViewContainerRef, static: true}) entry: ViewContainerRef;

  entryRef: ComponentRef<DynamicLoadMessageComponent>;

  constructor(private resolver : ComponentFactoryResolver) {

  }

  ngOnDestroy(): void {
    this.entryRef.destroy();
  }

  createComponent(title: string) {

    // 1. clear container
    this.entry.clear();

    // 2. Create a factory for messageComponent
    const factory = this.resolver.resolveComponentFactory(DynamicLoadMessageComponent);

    // 3. Create component using factory
    this.entryRef = this.entry.createComponent(factory);

    // 4. Pass value for @Input properties using component reference instance method
    this.entryRef.instance.message = title;

    // get output event from subscribing to delete event (output)
    this.entryRef.instance.deleteEvent.subscribe(() => {
      this.entryRef.destroy();
    })

  }
  destroyComponent() {
           this.entryRef.destroy();
       }
  ngOnInit() {
  }

}
