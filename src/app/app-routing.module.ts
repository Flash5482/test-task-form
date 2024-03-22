import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import {AddInfoPageComponent} from "./pages/add-info-page/add-info-page.component";


const routes: Routes = [
  {
    path: '',
    component: AddInfoPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot((routes))],
  exports: [RouterModule]
})
export class AppRoutingModule { }
