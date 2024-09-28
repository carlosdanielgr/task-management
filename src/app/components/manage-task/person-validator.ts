import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function uniqueNameValidator(existingNames: string[]): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    if (!control.value) {
      return null;
    }

    const nameExists = existingNames.includes(control.value);

    return nameExists ? { nameAlreadyExists: true } : null;
  };
}
