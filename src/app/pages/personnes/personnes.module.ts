import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PersonnesPageRoutingModule } from './personnes-routing.module';

import { PersonnesPage } from './personnes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PersonnesPageRoutingModule
  ],
  declarations: [PersonnesPage]
})
export class PersonnesPageModule {}
