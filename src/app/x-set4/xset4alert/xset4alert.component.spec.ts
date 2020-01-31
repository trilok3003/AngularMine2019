import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Xset4alertComponent } from './xset4alert.component';

describe('Xset4alertComponent', () => {
  let component: Xset4alertComponent;
  let fixture: ComponentFixture<Xset4alertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Xset4alertComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Xset4alertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
