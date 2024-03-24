import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddInfoPageComponent } from "./add-info-page.component";
import { MatButtonModule } from "@angular/material/button";
import { AddFormModule } from "./shared/add-form/add-form.module";



@NgModule({
  declarations: [AddInfoPageComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    AddFormModule
  ],
  exports: [AddInfoPageComponent]
})
export class AddInfoPageModule { }
