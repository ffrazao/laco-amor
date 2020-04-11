import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FiltroRoutingModule } from './filtro-routing.module';
import { FiltroComponent } from './filtro.component';


@NgModule({
  declarations: [FiltroComponent],
  imports: [
    CommonModule,
    FiltroRoutingModule
  ]
})
export class FiltroModule { }
