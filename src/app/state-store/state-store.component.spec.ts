import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StateStoreComponent } from './state-store.component';

describe('StateStoreComponent', () => {
  let component: StateStoreComponent;
  let fixture: ComponentFixture<StateStoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StateStoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StateStoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
