import { Agence } from './../interfaces/agence';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AgenceService {

  constructor(private http: HttpClient) { }


  apiUrl = 'http://localhost:9090/agence';
  agence: Agence ;



  addAgence(agence: Agence ): Observable<any> {
    return this.http.post(`${this.apiUrl}/addAgence`, agence);
  }
  putData(id: number, hotel: any): Observable<any> {
     return this.http.put(`${this.apiUrl}/updateAgence/${id}`, hotel );
  }
  getOne(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/getAgence/${id}`);
  }

  getAll(): Observable<any> {
    return this.http.get(`${this.apiUrl}/getAll`);
  }
}
