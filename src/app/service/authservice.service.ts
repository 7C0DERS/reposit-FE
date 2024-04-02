import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {

  constructor(private http:HttpClient) { }

  login(email: string,password: string): Observable<any>{
    return this.http.post.<any>('/login',{email,password});
  }

  logout():void{

    
  }
}
