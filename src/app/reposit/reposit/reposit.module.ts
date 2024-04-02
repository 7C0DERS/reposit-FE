import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RepositRoutingModule } from './reposit-routing.module';
import { RepositComponent } from '../reposit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SidebarComponent } from 'src/app/sidebar/sidebar.component';


@NgModule({
  declarations: [RepositComponent],
  imports: [
    CommonModule,
    RepositRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SidebarComponent

  ]
})
export class RepositModule { }
