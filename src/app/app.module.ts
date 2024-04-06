import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { MyInterceptorInterceptor } from './my-interceptor.interceptor';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RepositModule } from './reposit/reposit/reposit.module';
import { RegisterComponent } from './register/register.component';
import { ManagementAppComponent } from './management-app/management-app.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ManagementAppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    RepositModule,
    HttpClientModule
    
  ],
  providers: [   { provide: HTTP_INTERCEPTORS,
    useClass:MyInterceptorInterceptor, multi: true },
   
],
  bootstrap: [AppComponent]
})
export class AppModule { }
