import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicHtmlTemplateComponent } from './dynamic-html-template.component';

describe('DynamicHtmlTemplateComponent', () => {
  let component: DynamicHtmlTemplateComponent;
  let fixture: ComponentFixture<DynamicHtmlTemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DynamicHtmlTemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicHtmlTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
