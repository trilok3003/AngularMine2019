import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarTotalComponent } from './car-total.component';

describe('CarTotalComponent', () => {
  let component: CarTotalComponent;
  let fixture: ComponentFixture<CarTotalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarTotalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarTotalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
