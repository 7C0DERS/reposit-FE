import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RepositComponent } from '../reposit.component';

const routes: Routes = [{
  path:"",component:RepositComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RepositRoutingModule { }
