import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularNgtempleteOutletComponent } from './angular-ngtemplete-outlet.component';

describe('AngularNgtempleteOutletComponent', () => {
  let component: AngularNgtempleteOutletComponent;
  let fixture: ComponentFixture<AngularNgtempleteOutletComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngularNgtempleteOutletComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularNgtempleteOutletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
