import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularKeysEventComponent } from './angular-keys-event.component';

describe('AngularKeysEventComponent', () => {
  let component: AngularKeysEventComponent;
  let fixture: ComponentFixture<AngularKeysEventComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngularKeysEventComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularKeysEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
