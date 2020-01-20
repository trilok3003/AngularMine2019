import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JwtAuthenticationComponent } from './jwt-authentication.component';

describe('JwtAuthenticationComponent', () => {
  let component: JwtAuthenticationComponent;
  let fixture: ComponentFixture<JwtAuthenticationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JwtAuthenticationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JwtAuthenticationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
