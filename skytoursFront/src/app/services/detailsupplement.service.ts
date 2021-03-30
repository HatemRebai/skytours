import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DetailsupplementService {

  constructor(private http: HttpClient) { }

  apiUrl = 'http://localhost:9090/detailsupplement';

  addSupplementDetail(id: number, idlog: number, detailSupplement: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/addDs/${id}?mysup=${idlog}`, detailSupplement );
  }
  getAll(): Observable<any> {
    return this.http.get(`${this.apiUrl}/getAllDs`);
  }
  put(id: number, detailSupplement: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/updateSupDetail/${id}` , detailSupplement);
  }

  getPrixByIdSupp(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/getprixbyIdSupp/${id}`);
  }
}
