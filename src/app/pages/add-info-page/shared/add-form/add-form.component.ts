import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormService } from "./services";
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { AddFormControl } from "../enums";
import { delay, Observable, of } from "rxjs";
import { countriesOptions } from "../../../../shared/contants";
import { ClearObservableDirective } from "../../../../shared/directives";

@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.scss'],
})
export class AddFormComponent extends ClearObservableDirective {


constructor(private formService: FormService, protected fb: FormBuilder) {
  super();
}

@ViewChild('formElement') formElement: ElementRef;

readonly addFormControl = AddFormControl;
readonly countriesOptions = countriesOptions;

  formSubmitted: boolean = false;

  loading: boolean = false;
  countPhones: number = 0;


  get form(): FormGroup {
    return this.formService.form;
  }

  get valid(): boolean {
    return this.formService.valid;
  }

  get phonesFields(){
      return this.formService.form.get(AddFormControl.PHONES) as FormArray;
  }

  ngOnInit(): void {
    this.formService.buildForm();
  }

  addPhone(){
    this.phonesFields.push(new FormControl(null, Validators.compose([Validators.required])))
    this.countPhones++;
  }

  removePhone(index: number){
  this.phonesFields.removeAt(index);
    this.countPhones--;
  }

  addInfo(){
    this.formSubmitted = true;
    if(!this.formService.valid){
      this.focusOnFirstError();
      return;
    }

    this.loading = true;
    this.simulateAsyncTask().subscribe(() => {
      console.log(this.formService.value)
      this.loading = false;
    });
  }

  simulateAsyncTask(): Observable<unknown> {
    return of(null).pipe(delay(1000));
  }

  focusOnFirstError() {
    const firstInvalidControl = this.getFirstInvalidControl();
    if (firstInvalidControl) {
      firstInvalidControl.focus();
    }
  }

  getFirstInvalidControl() {
    const formControls = this.formService.form.controls;
    for (const controlName in formControls) {
      if (formControls.hasOwnProperty(controlName)) {
        const control = formControls[controlName];
        if (control.invalid) {
          return this.formElement.nativeElement.querySelector(`[ng-reflect-name="${controlName === 'phones' ? this.countPhones : controlName}"]`);
        }
      }
    }
    return null;
  }
}
