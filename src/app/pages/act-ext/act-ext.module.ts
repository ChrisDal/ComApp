import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ActExtPageRoutingModule } from './act-ext-routing.module';

import { ActExtPage } from './act-ext.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ActExtPageRoutingModule
  ],
  declarations: [ActExtPage]
})
export class ActExtPageModule {}
