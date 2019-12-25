import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrollingList2Component } from './scrolling-list2.component';

describe('ScrollingList2Component', () => {
  let component: ScrollingList2Component;
  let fixture: ComponentFixture<ScrollingList2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScrollingList2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScrollingList2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
