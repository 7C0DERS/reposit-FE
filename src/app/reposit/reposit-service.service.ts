import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RepositServiceService {

  constructor(private http: HttpClient) { }
  post(body:any){
    return this.http.post('http://localhost:3006/reposit/reposit-folder',body)
  }
}
