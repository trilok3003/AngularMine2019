import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DomManupulationComponent } from './dom-manupulation.component';

describe('DomManupulationComponent', () => {
  let component: DomManupulationComponent;
  let fixture: ComponentFixture<DomManupulationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DomManupulationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DomManupulationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
