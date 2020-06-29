import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrollingItemListComponent } from './scrolling-item-list.component';

describe('ScrollingItemListComponent', () => {
  let component: ScrollingItemListComponent;
  let fixture: ComponentFixture<ScrollingItemListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScrollingItemListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScrollingItemListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
