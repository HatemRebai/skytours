import { Reservation } from './../interfaces/reservation';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DetailHotel } from '../interfaces/detailhotel';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  constructor(private http: HttpClient) { }


  apiUrl = 'http://localhost:9090/reservation';



  add(reservation: Reservation ): Observable<any> {
    return this.http.post(`${this.apiUrl}/addReservation`, reservation);
  }
  put(id: number, reservation: any): Observable<any> {
     return this.http.put(`${this.apiUrl}/updateR/${id}`, reservation );
  }
  getOne(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/reservation/${id}`);
  }
  getAll(): Observable<any> {
    return this.http.get(`${this.apiUrl}/listReservation`);
  }
  getTheLast(): Observable<any> {
    return this.http.get(`${this.apiUrl}/getlastRes`);
  }



}
