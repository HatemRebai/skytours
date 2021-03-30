
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Hotel } from '../interfaces/hotel';

@Injectable({
  providedIn: 'root'
})
export class HotelService {

  constructor(private http: HttpClient) { }


  apiUrl = 'http://localhost:9090/hotel';
  hotel: Hotel;


  getHotel(): Observable<any> {
    return this.http.get(`${this.apiUrl}/hotels`);
  }
  add(hotel: Hotel): Observable<any> {
    return this.http.post(`${this.apiUrl}/addHotel`, hotel);
  }
  putData(id: number, hotel: any): Observable<any> {
     return this.http.put(`${this.apiUrl}/updateHotel/${id}`, hotel );
  }
  getOne(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/hotel/${id}`);
  }
}
