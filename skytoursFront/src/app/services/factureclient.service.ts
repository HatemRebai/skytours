import { FactureClient } from './../interfaces/factureclient';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FactureclientService {

  constructor(private http: HttpClient) { }


  apiUrl = 'http://localhost:9090/factureclient';
  factureClient: FactureClient;



  add(factureClient: FactureClient): Observable<any> {
    return this.http.post(`${this.apiUrl}/addFactureClient`, factureClient);
  }
  getAll(): Observable<any> {
    return this.http.get(`${this.apiUrl}/allFactures`);
  }
  getOne(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/oneFactureClient/${id}`);
  }
}
