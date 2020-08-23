import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ActExtPage } from './act-ext.page';

const routes: Routes = [
  {
    path: '',
    component: ActExtPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ActExtPageRoutingModule {}
