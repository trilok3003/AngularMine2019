import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JsonpWithObservablesComponent } from './jsonp-with-observables.component';

describe('JsonpWithObservablesComponent', () => {
  let component: JsonpWithObservablesComponent;
  let fixture: ComponentFixture<JsonpWithObservablesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JsonpWithObservablesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JsonpWithObservablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
