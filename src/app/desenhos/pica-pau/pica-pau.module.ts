import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PicaPauPageRoutingModule } from './pica-pau-routing.module';

import { PicaPauPage } from './pica-pau.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PicaPauPageRoutingModule
  ],
  declarations: [PicaPauPage]
})
export class PicaPauPageModule {}
