import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResoveDuplicasyComponent } from './resove-duplicasy.component';

describe('ResoveDuplicasyComponent', () => {
  let component: ResoveDuplicasyComponent;
  let fixture: ComponentFixture<ResoveDuplicasyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResoveDuplicasyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResoveDuplicasyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
