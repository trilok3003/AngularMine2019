import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularHostBindingHostListenerComponent } from './angular-host-binding-host-listener.component';

describe('AngularHostBindingHostListenerComponent', () => {
  let component: AngularHostBindingHostListenerComponent;
  let fixture: ComponentFixture<AngularHostBindingHostListenerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngularHostBindingHostListenerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularHostBindingHostListenerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
