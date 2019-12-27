import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularViewchildComponent } from './angular-viewchild.component';

describe('AngularViewchildComponent', () => {
  let component: AngularViewchildComponent;
  let fixture: ComponentFixture<AngularViewchildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngularViewchildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularViewchildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
