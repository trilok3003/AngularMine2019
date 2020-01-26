import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogExampleTestComponent } from './dialog-example-test.component';

describe('DialogExampleTestComponent', () => {
  let component: DialogExampleTestComponent;
  let fixture: ComponentFixture<DialogExampleTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogExampleTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogExampleTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
