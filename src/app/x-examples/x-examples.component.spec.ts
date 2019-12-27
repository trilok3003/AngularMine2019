import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { XExamplesComponent } from './x-examples.component';

describe('XExamplesComponent', () => {
  let component: XExamplesComponent;
  let fixture: ComponentFixture<XExamplesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ XExamplesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(XExamplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
