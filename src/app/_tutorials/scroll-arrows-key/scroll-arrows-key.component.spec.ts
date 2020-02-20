import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrollArrowsKeyComponent } from './scroll-arrows-key.component';

describe('ScrollArrowsKeyComponent', () => {
  let component: ScrollArrowsKeyComponent;
  let fixture: ComponentFixture<ScrollArrowsKeyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScrollArrowsKeyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScrollArrowsKeyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
