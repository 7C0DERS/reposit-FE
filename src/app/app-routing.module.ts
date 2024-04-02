import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RepositComponent } from './reposit/reposit.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [  {path: '', redirectTo: '/login', pathMatch: 'full'},
{path: 'login', component: LoginComponent, },
{path: 'register', component: RegisterComponent },
{
  path:'reposit',loadChildren:()=>import('./reposit/reposit/reposit.module').then((m)=>m.RepositModule)
 },];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
