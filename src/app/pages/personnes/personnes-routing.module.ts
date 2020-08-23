import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PersonnesPage } from './personnes.page';

const routes: Routes = [
  {
    path: '',
    component: PersonnesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PersonnesPageRoutingModule {}
