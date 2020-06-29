import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataToRoutesComponent } from './data-to-routes.component';

describe('DataToRoutesComponent', () => {
  let component: DataToRoutesComponent;
  let fixture: ComponentFixture<DataToRoutesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataToRoutesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataToRoutesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
