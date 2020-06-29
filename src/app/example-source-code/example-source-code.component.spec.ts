import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleSourceCodeComponent } from './example-source-code.component';

describe('ExampleSourceCodeComponent', () => {
  let component: ExampleSourceCodeComponent;
  let fixture: ComponentFixture<ExampleSourceCodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExampleSourceCodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExampleSourceCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
