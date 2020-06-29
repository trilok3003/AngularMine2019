import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateFormExComponent } from './template-form-ex.component';

describe('TemplateFormExComponent', () => {
  let component: TemplateFormExComponent;
  let fixture: ComponentFixture<TemplateFormExComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemplateFormExComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateFormExComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
