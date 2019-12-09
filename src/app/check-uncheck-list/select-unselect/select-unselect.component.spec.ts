import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectUnselectComponent } from './select-unselect.component';

describe('SelectUnselectComponent', () => {
  let component: SelectUnselectComponent;
  let fixture: ComponentFixture<SelectUnselectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectUnselectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectUnselectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
