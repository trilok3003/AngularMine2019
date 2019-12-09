import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowmoreShowlessComponent } from './showmore-showless.component';

describe('ShowmoreShowlessComponent', () => {
  let component: ShowmoreShowlessComponent;
  let fixture: ComponentFixture<ShowmoreShowlessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowmoreShowlessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowmoreShowlessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
