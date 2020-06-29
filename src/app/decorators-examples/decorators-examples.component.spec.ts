import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DecoratorsExamplesComponent } from './decorators-examples.component';

describe('DecoratorsExamplesComponent', () => {
  let component: DecoratorsExamplesComponent;
  let fixture: ComponentFixture<DecoratorsExamplesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DecoratorsExamplesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DecoratorsExamplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
