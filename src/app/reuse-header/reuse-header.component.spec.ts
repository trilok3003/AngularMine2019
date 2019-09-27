import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReuseHeaderComponent } from './reuse-header.component';

describe('ReuseHeaderComponent', () => {
  let component: ReuseHeaderComponent;
  let fixture: ComponentFixture<ReuseHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReuseHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReuseHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
