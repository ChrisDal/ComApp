import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ActInPageRoutingModule } from './act-in-routing.module';

import { ActInPage } from './act-in.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ActInPageRoutingModule
  ],
  declarations: [ActInPage]
})
export class ActInPageModule {}
