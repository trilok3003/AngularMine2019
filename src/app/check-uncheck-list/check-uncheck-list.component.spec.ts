import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckUncheckListComponent } from './check-uncheck-list.component';

describe('CheckUncheckListComponent', () => {
  let component: CheckUncheckListComponent;
  let fixture: ComponentFixture<CheckUncheckListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckUncheckListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckUncheckListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
