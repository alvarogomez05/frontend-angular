import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerifyResetPasswordComponent } from './verify-reset-password.component';

describe('VerifyResetPasswordComponent', () => {
  let component: VerifyResetPasswordComponent;
  let fixture: ComponentFixture<VerifyResetPasswordComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VerifyResetPasswordComponent]
    });
    fixture = TestBed.createComponent(VerifyResetPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
