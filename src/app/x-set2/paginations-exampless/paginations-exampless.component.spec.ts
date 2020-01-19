import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginationsExamplessComponent } from './paginations-exampless.component';

describe('PaginationsExamplessComponent', () => {
  let component: PaginationsExamplessComponent;
  let fixture: ComponentFixture<PaginationsExamplessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaginationsExamplessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginationsExamplessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
