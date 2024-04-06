import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RepositRoutingModule } from './reposit-routing.module';
import { RepositComponent } from '../reposit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SidebarComponent } from 'src/app/sidebar/sidebar.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [RepositComponent],
  imports: [
    CommonModule,
    RepositRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SidebarComponent,
    HttpClientModule

  ]
})
export class RepositModule { }
