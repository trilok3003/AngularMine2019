import { Component, OnInit, Directive, ElementRef, ViewChildren, HostListener, QueryList } from '@angular/core';
@Directive({
  selector: '[itemCard]'
})
export class ItemCardDirective {
  constructor(private elementRef: ElementRef<HTMLElement>) { };
  scrollIntoView() {
    this.elementRef.nativeElement.scrollIntoView(true);
  }
}

@Component({
  selector: 'app-scrolling-list2',
  templateUrl: './scrolling-list2.component.html',
  styleUrls: ['./scrolling-list2.component.css']
})
export class ScrollingList2Component implements OnInit {

  list = new Array(100).fill(null).map((_, i) => ({
    name: `Item #${i + 1}`
  }));

  @ViewChildren(ItemCardDirective)
  itemCards: QueryList<ItemCardDirective>;

  focusedIndex = 0;

  @HostListener('window:keydown.ArrowDown', ['$event'])
  scrollDown(event: KeyboardEvent) {
    // prevent default scrolling
    event.preventDefault();

    if (this.focusedIndex === this.itemCards.length + 1) {
      return;
    }

    this.focusedIndex++;

    const targetCard = this.itemCards.toArray()[this.focusedIndex];
    targetCard.scrollIntoView();
  }

  @HostListener('window:keydown.ArrowUp', ['$event'])
  scrollUp(event: KeyboardEvent) {
    // prevent default scrolling
    event.preventDefault();

    if (this.focusedIndex === 0) {
      return;
    }

    this.focusedIndex--;

    const targetCard = this.itemCards.toArray()[this.focusedIndex];
    targetCard.scrollIntoView();
  }

  ngOnInit() {
  }

}
