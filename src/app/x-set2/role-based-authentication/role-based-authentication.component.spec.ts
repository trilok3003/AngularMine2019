import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoleBasedAuthenticationComponent } from './role-based-authentication.component';

describe('RoleBasedAuthenticationComponent', () => {
  let component: RoleBasedAuthenticationComponent;
  let fixture: ComponentFixture<RoleBasedAuthenticationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoleBasedAuthenticationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoleBasedAuthenticationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
