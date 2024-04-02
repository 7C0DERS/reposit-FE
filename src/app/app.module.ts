import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { MyInterceptorInterceptor } from './my-interceptor.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,

 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SidebarComponent ,  
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [   { provide: HTTP_INTERCEPTORS,
    useClass:MyInterceptorInterceptor, multi: true },
   
],
  bootstrap: [AppComponent]
})
export class AppModule { }
