import { Detaillogement } from './../interfaces/detaillogement';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DetaillogementService {

  constructor(private http: HttpClient) { }
  detaillogement: Detaillogement;

  apiUrl = 'http://localhost:9090/detaillogement';

  addLogementDetail(id: number, idlog: number, detailLogement: Detaillogement): Observable<any> {
    return this.http.post(`${this.apiUrl}/addDl/${id}?mylog=${idlog}`, detailLogement );
  }
 /* addLogementDetail(detailLogement: Detaillogement): Observable<any> {
    return this.http.post(`${this.apiUrl}/addDl/`, detailLogement );
  } */
  getAll(): Observable<any> {
    return this.http.get(`${this.apiUrl}/getAllDl`);
  }
  // updateRepDetail/{id}
  put(id: number, detailLogement: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/updateLogDetail/${id}` , detailLogement);
  }
  getPrixByIdLog(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/getprixbyIdLog/${id}`);
  }

}
