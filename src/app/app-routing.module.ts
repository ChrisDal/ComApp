import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'sentiments/:myid',
    loadChildren: () => import('./pages/sentiments/sentiments.module').then( m => m.SentimentsPageModule)
  },
  {
    path: 'besoins',
    loadChildren: () => import('./pages/besoins/besoins.module').then( m => m.BesoinsPageModule)
  },
  {
    path: 'act-ext',
    loadChildren: () => import('./pages/act-ext/act-ext.module').then( m => m.ActExtPageModule)
  },
  {
    path: 'act-in',
    loadChildren: () => import('./pages/act-in/act-in.module').then( m => m.ActInPageModule)
  },
  {
    path: 'personnes/:myid',
    loadChildren: () => import('./pages/personnes/personnes.module').then( m => m.PersonnesPageModule)
  },
  {
    path: 'others',
    loadChildren: () => import('./pages/others/others.module').then( m => m.OthersPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
