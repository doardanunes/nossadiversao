import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { The100PageRoutingModule } from './the100-routing.module';

import { The100Page } from './the100.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    The100PageRoutingModule
  ],
  declarations: [The100Page]
})
export class The100PageModule {}
