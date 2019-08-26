import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompoentsComponent } from './compoents.component';

describe('CompoentsComponent', () => {
  let component: CompoentsComponent;
  let fixture: ComponentFixture<CompoentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompoentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompoentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
