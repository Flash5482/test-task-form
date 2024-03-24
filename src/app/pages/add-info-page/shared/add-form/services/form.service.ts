import { Injectable } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { BaseFormService } from "../../../../../shared/services";
import { IAddFormValue } from "../../interfaces";
import { AddFormControl } from "../../enums";
import { emailAsyncValidator } from "../../../../../shared/validators";

@Injectable({
  providedIn: 'root'
})
export class FormService extends BaseFormService<IAddFormValue>{

  constructor(formBuilder: FormBuilder) {
    super(formBuilder);
  }

  buildForm(): void {
    this.build({
      [AddFormControl.NAME]: this.fb.control(null,  Validators.compose([
        Validators.required,
      ])),
      [AddFormControl.LAST_NAME]: this.fb.control(null, Validators.compose([
        Validators.required,
      ])),
      [AddFormControl.EMAIL]: this.fb.control(null, {
        validators: [Validators.email],
        asyncValidators: emailAsyncValidator(),
      }),
      [AddFormControl.PHONES]: this.fb.array([
        new FormControl(null, Validators.compose([Validators.required])),
      ]),
      [AddFormControl.COUNTRY]: this.fb.control(null, Validators.compose([
        Validators.required,
      ])),
      [AddFormControl.ADDRESS]: this.fb.control(null, Validators.compose([
        Validators.required,
      ])),
      [AddFormControl.CREDIT_CART]: this.fb.control(null, Validators.compose([
        Validators.required,
      ])),
      [AddFormControl.CVV]: this.fb.control(null, Validators.compose([
        Validators.required,
      ])),
      [AddFormControl.TERMS]: this.fb.control(null, Validators.compose([
        Validators.requiredTrue,
      ]))
    })
  }
}
