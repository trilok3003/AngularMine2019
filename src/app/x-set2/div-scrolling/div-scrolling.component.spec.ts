import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DivScrollingComponent } from './div-scrolling.component';

describe('DivScrollingComponent', () => {
  let component: DivScrollingComponent;
  let fixture: ComponentFixture<DivScrollingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DivScrollingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DivScrollingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
