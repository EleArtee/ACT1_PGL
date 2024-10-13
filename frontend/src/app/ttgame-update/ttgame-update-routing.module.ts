import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TtgameUpdatePage } from './ttgame-update.page';

const routes: Routes = [
  {
    path: '',
    component: TtgameUpdatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TtgameUpdatePageRoutingModule {}
 