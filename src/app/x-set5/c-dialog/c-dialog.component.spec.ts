import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CDialogComponent } from './c-dialog.component';

describe('CDialogComponent', () => {
  let component: CDialogComponent;
  let fixture: ComponentFixture<CDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
