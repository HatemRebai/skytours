import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Agence } from '../interfaces/agence';
import { Logement } from '../interfaces/logement';

@Injectable({
  providedIn: 'root'
})
export class LogementService {

  constructor(private http: HttpClient) { }


  apiUrl = 'http://localhost:9090/logement';
  logement: Logement;

  add(logement: Logement ): Observable<any> {
    return this.http.post(`${this.apiUrl}/addLogement`, logement);
  }
  put(id: number, logement: any): Observable<any> {
     return this.http.put(`${this.apiUrl}/updateL/${id}`, logement );
  }
  getOne(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/logement/${id}`);
  }
  getAll(): Observable<any> {
    return this.http.get(`${this.apiUrl}/logements`);
  }
}
