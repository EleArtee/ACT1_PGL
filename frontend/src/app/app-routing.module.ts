import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'my-ttg',
    loadChildren: () => import('./my-ttg/my-ttg.module').then( m => m.MyTtgPageModule)
  },
  {
    path: 'ttgameadd',
    loadChildren: () => import('./ttgameadd/ttgameadd.module').then( m => m.TtgameaddPageModule)
  },
  {
    path: 'ttgame-update/:id',
    loadChildren: () => import('./ttgame-update/ttgame-update.module').then( m => m.TtgameUpdatePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
