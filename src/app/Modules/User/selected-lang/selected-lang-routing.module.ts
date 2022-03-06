import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SelectedLangComponent } from './selected-lang.component';

const routes: Routes = [
  {
    path:'',
    component:SelectedLangComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SelectedLangRoutingModule { }
