import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { The100Page } from './the100.page';

const routes: Routes = [
  {
    path: '',
    component: The100Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class The100PageRoutingModule {}
