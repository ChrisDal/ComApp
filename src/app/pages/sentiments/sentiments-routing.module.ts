import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SentimentsPage } from './sentiments.page';

const routes: Routes = [
  {
    path: '',
    component: SentimentsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SentimentsPageRoutingModule {}
