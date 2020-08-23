import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SentimentsPageRoutingModule } from './sentiments-routing.module';

import { SentimentsPage } from './sentiments.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SentimentsPageRoutingModule
  ],
  declarations: [SentimentsPage]
})
export class SentimentsPageModule {}

