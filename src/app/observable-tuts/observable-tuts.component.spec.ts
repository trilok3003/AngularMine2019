import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ObservableTutsComponent } from './observable-tuts.component';

describe('ObservableTutsComponent', () => {
  let component: ObservableTutsComponent;
  let fixture: ComponentFixture<ObservableTutsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ObservableTutsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ObservableTutsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
