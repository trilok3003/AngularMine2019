import { Component, OnInit, Input, ViewChild, ComponentFactoryResolver, ComponentRef } from '@angular/core';
import { DialogItem } from '../dialog.item';
import { DialogDirective } from '../dialog.directive';
import { DialogConfig } from '../dialog.config';
import { CdialogService } from '../cdialog.service';

@Component({
  selector: 'app-c-dialog',
  templateUrl: './c-dialog.component.html',
  styleUrls: ['./c-dialog.component.css']
})
export class CDialogComponent implements OnInit {
  @Input() item: DialogItem;

  @ViewChild(DialogDirective,{static: true}) newsfeed: DialogDirective;
  public componentRef: ComponentRef<any>

  constructor(private componentFactoryResolver: ComponentFactoryResolver, 
    public cdialogService: CdialogService
    ) { }

  ngOnInit() {
  this.loadNewsFeedComponents1();
  }

  ngOnDestroy() {
    if (this.componentRef) {
      this.componentRef.destroy();
    }
  }
  loadNewsFeedComponents1() {
    let NewsFeedItem = this.item;

    let componentFactory = this.componentFactoryResolver.resolveComponentFactory(NewsFeedItem.component);

    let viewContainerRef = this.newsfeed.viewContainerRef;
    viewContainerRef.clear();

    this.componentRef = viewContainerRef.createComponent(componentFactory);
    (<DialogConfig>this.componentRef.instance).data = NewsFeedItem.data;
    this.componentRef.instance.deleteEvent.subscribe(() => {
      this.componentRef.destroy();
      this.cdialogService.close();
    })
  }
  onDialogClicked() {
    if (this.componentRef) {
      this.componentRef.destroy();
      this.cdialogService.close();
    }
  }
}
