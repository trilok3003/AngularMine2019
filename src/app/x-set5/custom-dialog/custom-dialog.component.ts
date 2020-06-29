import { Component, OnInit, Input, ViewChild, ComponentFactoryResolver } from '@angular/core';
import { DialogItem } from '../dialog.item';
import { DialogDirective } from '../dialog.directive';
import { DialogConfig } from '../dialog.config';

@Component({
  selector: 'app-custom-dialog',
  templateUrl: './custom-dialog.component.html',
  styleUrls: ['./custom-dialog.component.css']
})
export class CustomDialogComponent implements OnInit {

  @Input() newsfeeds: DialogItem[];
  currentAdIndex = -1;
  @ViewChild(DialogDirective,{static: true}) newsfeed: DialogDirective;
  interval: any;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

  ngOnInit() {
    this.loadNewsFeedComponents();
   this.getNewsFeeds();
  }

  ngOnDestroy() {
    clearInterval(this.interval);
  }

  loadNewsFeedComponents() {
    this.currentAdIndex = (this.currentAdIndex + 1) % this.newsfeeds.length;
    let NewsFeedItem = this.newsfeeds[this.currentAdIndex];

    let componentFactory = this.componentFactoryResolver.resolveComponentFactory(NewsFeedItem.component);

    let viewContainerRef = this.newsfeed.viewContainerRef;
    viewContainerRef.clear();

    let componentRef = viewContainerRef.createComponent(componentFactory);
    (<DialogConfig>componentRef.instance).data = NewsFeedItem.data;
  }

  getNewsFeeds() {
    this.interval = setInterval(() => {
      this.loadNewsFeedComponents();
    }, 3000);
  }
}
