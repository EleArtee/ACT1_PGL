import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyTtgPage } from './my-ttg.page';

const routes: Routes = [
  {
    path: '',
    component: MyTtgPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MyTtgPageRoutingModule {}
