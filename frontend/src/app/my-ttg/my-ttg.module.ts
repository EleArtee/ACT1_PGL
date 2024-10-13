import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MyTtgPageRoutingModule } from './my-ttg-routing.module';

import { MyTtgPage } from './my-ttg.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MyTtgPageRoutingModule
  ],
  declarations: [MyTtgPage]
})
export class MyTtgPageModule {}
