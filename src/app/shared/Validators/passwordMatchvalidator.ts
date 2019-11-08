import { AbstractControl } from '@angular/forms';

export function passwordMatchValidator(control: AbstractControl): {[key: string]: any} | null {
  if( control !== null && (control.value !== null || control.value !== undefined)) {
    const password = control.root.get('password');
    if ( password !== null)
    {
      const passVal: string = password.value;
      const confirmPassword: string = control.value;
      if (passVal !== confirmPassword) {
        return {
            NoPasswordMatch: true
          };
    }
  }
}

  return null;

}
