import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ActInPage } from './act-in.page';

const routes: Routes = [
  {
    path: '',
    component: ActInPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ActInPageRoutingModule {}
