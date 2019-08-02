import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupByPipeExampleComponent } from './group-by-pipe-example.component';

describe('GroupByPipeExampleComponent', () => {
  let component: GroupByPipeExampleComponent;
  let fixture: ComponentFixture<GroupByPipeExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroupByPipeExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupByPipeExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
