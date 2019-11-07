import { AbstractControl } from '@angular/forms';

export function passwordMatchValidator(control: AbstractControl) {
  const password: string = control.get('password').value;
  const confirmPassword: string = control.get('confirmPassword').value;
  if (password !== confirmPassword) {
    return { NoPasswordMatch: true }
  }

  return null;
}
