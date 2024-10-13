import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';


import { IonicModule } from '@ionic/angular';

import { TtgameUpdatePageRoutingModule } from './ttgame-update-routing.module';

import { TtgameUpdatePage } from './ttgame-update.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    TtgameUpdatePageRoutingModule
  ],
  declarations: [TtgameUpdatePage]
})
export class TtgameUpdatePageModule {}
