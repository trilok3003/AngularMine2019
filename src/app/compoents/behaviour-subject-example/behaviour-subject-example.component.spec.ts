import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BehaviourSubjectExampleComponent } from './behaviour-subject-example.component';

describe('BehaviourSubjectExampleComponent', () => {
  let component: BehaviourSubjectExampleComponent;
  let fixture: ComponentFixture<BehaviourSubjectExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BehaviourSubjectExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BehaviourSubjectExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
