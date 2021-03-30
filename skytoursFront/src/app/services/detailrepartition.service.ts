import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DetailrepartitionService {

  constructor(private http: HttpClient) { }

  apiUrl = 'http://localhost:9090/detailrepartition';

  addRepartitionDetail(id: number, idrep: number, detailRepartition: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/addDr/${id}?myrep=${idrep}`, detailRepartition );
  }
  getAll(): Observable<any> {
    return this.http.get(`${this.apiUrl}/getAllDr`);
  }
  // updateRepDetail/{id}
put(id: number, detailRepartition: any): Observable<any> {
  return this.http.put(`${this.apiUrl}/updateRepDetail/${id}` , detailRepartition);
}
}
