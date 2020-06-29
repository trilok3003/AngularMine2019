import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RxjsUsesComponent } from './rxjs-uses.component';

describe('RxjsUsesComponent', () => {
  let component: RxjsUsesComponent;
  let fixture: ComponentFixture<RxjsUsesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RxjsUsesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RxjsUsesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
