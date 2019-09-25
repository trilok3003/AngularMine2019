import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateFormHandlingComponent } from './template-form-handling.component';

describe('TemplateFormHandlingComponent', () => {
  let component: TemplateFormHandlingComponent;
  let fixture: ComponentFixture<TemplateFormHandlingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemplateFormHandlingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateFormHandlingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
