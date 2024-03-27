import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RepositComponent } from './reposit/reposit.component';

const routes: Routes = [  {path: '', redirectTo: '/reposit', pathMatch: 'full'},
{path: 'login', component: LoginComponent, },
{path: 'reposit', component: RepositComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
