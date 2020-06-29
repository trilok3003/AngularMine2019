import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpAuthenticationComponent } from './http-authentication.component';

describe('HttpAuthenticationComponent', () => {
  let component: HttpAuthenticationComponent;
  let fixture: ComponentFixture<HttpAuthenticationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HttpAuthenticationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HttpAuthenticationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
