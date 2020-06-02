import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PicaPauPage } from './pica-pau.page';

const routes: Routes = [
  {
    path: '',
    component: PicaPauPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PicaPauPageRoutingModule {}
