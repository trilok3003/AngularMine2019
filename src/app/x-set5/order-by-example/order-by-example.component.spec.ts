import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderByExampleComponent } from './order-by-example.component';

describe('OrderByExampleComponent', () => {
  let component: OrderByExampleComponent;
  let fixture: ComponentFixture<OrderByExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderByExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderByExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
