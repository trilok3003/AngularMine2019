import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupcardComponent } from './popupcard.component';

describe('PopupcardComponent', () => {
  let component: PopupcardComponent;
  let fixture: ComponentFixture<PopupcardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopupcardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopupcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
