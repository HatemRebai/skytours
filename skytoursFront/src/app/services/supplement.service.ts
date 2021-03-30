import { Supplement } from './../interfaces/supplement';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SupplementService {

  constructor(private http: HttpClient) { }

  apiUrl = 'http://localhost:9090/supplement';
  supplement: Supplement;

  add(supplement: Supplement ): Observable<any> {
    return this.http.post(`${this.apiUrl}/addSupplement`, supplement);
  }
  put(id: number, supplement: any): Observable<any> {
     return this.http.put(`${this.apiUrl}/updateS/${id}`, supplement );
  }
  getOne(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/supplement/${id}`);
  }
  getAll(): Observable<any> {
    return this.http.get(`${this.apiUrl}/listSupplement`);
  }
}
