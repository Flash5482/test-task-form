import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AddInfoPageComponent} from "./add-info-page.component";
import {MatButtonModule} from "@angular/material/button";



@NgModule({
  declarations: [AddInfoPageComponent],
  imports: [
    CommonModule,
    MatButtonModule
  ],
  exports: [AddInfoPageComponent]
})
export class AddInfoPageModule { }
