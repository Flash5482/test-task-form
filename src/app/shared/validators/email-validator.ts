import {AbstractControl, AsyncValidatorFn, ValidationErrors} from "@angular/forms";
import {Observable, delay, map, of, catchError} from "rxjs";
import {emailsData} from "../contants";


export function emailAsyncValidator(): AsyncValidatorFn {
  return (control: AbstractControl): Observable<ValidationErrors | null> => {
    const email = control.value;

    if (!email || email === '') {
      return of(null);
    }

    return of(emailsData.includes(email)).pipe(
      delay(1000),
      map(exists => {
        return exists ? { emailExists: true } : null}),
      catchError(() => of(null))
    );
  }
}
