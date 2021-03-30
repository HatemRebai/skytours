import { Repartition } from './../interfaces/repartition';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RepartitionService {

  constructor(private http: HttpClient) { }


  apiUrl = 'http://localhost:9090/repartition';
  repartition: Repartition;

  add(repartition: Repartition ): Observable<any> {
    return this.http.post(`${this.apiUrl}/addR`, repartition);
  }
  put(id: number, repartition: any): Observable<any> {
     return this.http.put(`${this.apiUrl}/updateR/${id}`, repartition );
  }
  getOne(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/repartition/${id}`);
  }
  getAll(): Observable<any> {
    return this.http.get(`${this.apiUrl}/listRepartition`);
  }
  getRepNotExistInDetail(): Observable<any> {
    return this.http.get(`${this.apiUrl}/getRepNotExit`);
  }
  setValidate(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/iSvalid${id}`);

  }
}
