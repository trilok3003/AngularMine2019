import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InheritanceTestComponent } from './inheritance-test.component';

describe('InheritanceTestComponent', () => {
  let component: InheritanceTestComponent;
  let fixture: ComponentFixture<InheritanceTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InheritanceTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InheritanceTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
