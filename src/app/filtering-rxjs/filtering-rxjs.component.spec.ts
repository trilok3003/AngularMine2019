import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilteringRxjsComponent } from './filtering-rxjs.component';

describe('FilteringRxjsComponent', () => {
  let component: FilteringRxjsComponent;
  let fixture: ComponentFixture<FilteringRxjsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilteringRxjsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilteringRxjsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
