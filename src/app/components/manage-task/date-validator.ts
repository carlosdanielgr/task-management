import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function dateAfterOrEqualToday(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    if (!control.value) {
      return null;
    }
    const [year, month, day] = control.value.split('-').map(Number);

    const inputDate = new Date(year, month - 1, day);
    const today = new Date();

    inputDate.setHours(0, 0, 0, 0);
    today.setHours(0, 0, 0, 0);

    return inputDate >= today ? null : { dateInvalid: true };
  };
}
