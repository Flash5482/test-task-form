import { AddFormControl } from "../enums";

export interface IAddFormValue {
  [AddFormControl.NAME]: null | string;
  [AddFormControl.LAST_NAME]: null | string;
  [AddFormControl.EMAIL]: null | string;
  [AddFormControl.PHONES]: any[] | null;
  [AddFormControl.COUNTRY]: null | string;
  [AddFormControl.ADDRESS]: null | string;
  [AddFormControl.CREDIT_CART]: null | string;
  [AddFormControl.CVV]: null | string;
  [AddFormControl.TERMS]: null | string;
}
