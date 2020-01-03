import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoreHttpApiComponent } from './core-http-api.component';

describe('CoreHttpApiComponent', () => {
  let component: CoreHttpApiComponent;
  let fixture: ComponentFixture<CoreHttpApiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoreHttpApiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoreHttpApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
