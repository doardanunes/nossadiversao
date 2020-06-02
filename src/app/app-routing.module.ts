import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'ad-astra',
    loadChildren: () => import('./filmes/ad-astra/ad-astra.module').then( m => m.AdAstraPageModule)
  },
  {
    path: 'frozen2',
    loadChildren: () => import('./filmes/frozen2/frozen2.module').then( m => m.Frozen2PageModule)
  },
  {
    path: 'the100',
    loadChildren: () => import('./series/the100/the100.module').then( m => m.The100PageModule)
  },
  {
    path: 'breaking-bad',
    loadChildren: () => import('./series/breaking-bad/breaking-bad.module').then( m => m.BreakingBadPageModule)
  },
  {
    path: 'rick-and-morty',
    loadChildren: () => import('./desenhos/rick-and-morty/rick-and-morty.module').then( m => m.RickAndMortyPageModule)
  },
  {
    path: 'pica-pau',
    loadChildren: () => import('./desenhos/pica-pau/pica-pau.module').then( m => m.PicaPauPageModule)
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
