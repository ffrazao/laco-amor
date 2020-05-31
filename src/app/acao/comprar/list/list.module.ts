import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

import { ListRoutingModule } from './list-routing.module';
import { ListComponent } from './list.component';
import { PipeModule } from '../../../comum/pipe/pipe.module';

@NgModule({
  declarations: [ListComponent],
  imports: [
    CommonModule,
    ListRoutingModule,
    MatTableModule,
    MatInputModule,
    MatFormFieldModule,
    PipeModule,
  ]
})
export class ListModule { }
