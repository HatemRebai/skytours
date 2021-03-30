import { Typologie } from './../interfaces/typologie';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TypologieService {

  constructor(private http: HttpClient) { }

  apiUrl = 'http://localhost:9090/typologie';
  typologie: Typologie;


  add(typologie: Typologie ): Observable<any> {
    return this.http.post(`${this.apiUrl}/addTypologie`, typologie);
  }
  put(id: number, typologie: any): Observable<any> {
     return this.http.put(`${this.apiUrl}/updateT/${id}`, typologie );
  }
  getOne(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/typologie/${id}`);
  }
  getAll(): Observable<any> {
    return this.http.get(`${this.apiUrl}/listTypologie`);
  }
}
