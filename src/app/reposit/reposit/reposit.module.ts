import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RepositRoutingModule } from './reposit-routing.module';
import { RepositComponent } from '../reposit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [RepositComponent],
  imports: [
    CommonModule,
    RepositRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class RepositModule { }
