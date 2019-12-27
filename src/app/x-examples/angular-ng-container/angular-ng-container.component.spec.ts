import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularNgContainerComponent } from './angular-ng-container.component';

describe('AngularNgContainerComponent', () => {
  let component: AngularNgContainerComponent;
  let fixture: ComponentFixture<AngularNgContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngularNgContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularNgContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
