import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapSetComponent } from './map-set.component';

describe('MapSetComponent', () => {
  let component: MapSetComponent;
  let fixture: ComponentFixture<MapSetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapSetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapSetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
