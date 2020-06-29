import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Css3FlexBoxGuideComponent } from './css3-flex-box-guide.component';

describe('Css3FlexBoxGuideComponent', () => {
  let component: Css3FlexBoxGuideComponent;
  let fixture: ComponentFixture<Css3FlexBoxGuideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Css3FlexBoxGuideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Css3FlexBoxGuideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
