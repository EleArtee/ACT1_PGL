import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TtgameaddPageRoutingModule } from './ttgameadd-routing.module';

import { TtgameaddPage } from './ttgameadd.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TtgameaddPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [TtgameaddPage]
})
export class TtgameaddPageModule {}
