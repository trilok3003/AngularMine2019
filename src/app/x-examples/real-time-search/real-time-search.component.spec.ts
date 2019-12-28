import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RealTimeSearchComponent } from './real-time-search.component';

describe('RealTimeSearchComponent', () => {
  let component: RealTimeSearchComponent;
  let fixture: ComponentFixture<RealTimeSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RealTimeSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RealTimeSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
