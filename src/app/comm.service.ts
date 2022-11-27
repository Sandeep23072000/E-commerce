import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommService {

  constructor(
    private http: HttpClient,
  ) { }
  
  postapi(data: any){
    return this.http.post('http://localhost:3000/seller',data);
  }
  getapi(){

  }
}
