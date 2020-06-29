import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularAsyncPipeComponent } from './angular-async-pipe.component';

describe('AngularAsyncPipeComponent', () => {
  let component: AngularAsyncPipeComponent;
  let fixture: ComponentFixture<AngularAsyncPipeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngularAsyncPipeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularAsyncPipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
