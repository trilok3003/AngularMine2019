import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchAutoCompleteComponent } from './search-auto-complete.component';

describe('SearchAutoCompleteComponent', () => {
  let component: SearchAutoCompleteComponent;
  let fixture: ComponentFixture<SearchAutoCompleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchAutoCompleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchAutoCompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
