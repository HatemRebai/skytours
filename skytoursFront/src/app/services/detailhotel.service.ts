import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DetailHotel } from '../interfaces/detailhotel';

@Injectable({
  providedIn: 'root'
})
export class DetailhotelService {

  constructor(private http: HttpClient) { }


  apiUrl = 'http://localhost:9090/detailhotel';

  detailHotel: DetailHotel;

  add(id: number, detailHotel: DetailHotel ): Observable<any> {
    return this.http.post(`${this.apiUrl}/add/${id}`, detailHotel);
  }
  put(id: number, detailHotel: any): Observable<any> {
     return this.http.put(`${this.apiUrl}/updateDetail/${id}`, detailHotel );
  }
  getOne(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/DetailHotel/${id}`);
  }
  getAll(): Observable<any> {
    return this.http.get(`${this.apiUrl}/listDetailHotel`);
  }
  addlogTodetail(id: number, idlog: number ): Observable<any> {
    return this.http.get(`${this.apiUrl}/addlogementTodetail/${id}?mylog=${idlog}` );
  }
  addspecTodetail(id: number, idspec: number ): Observable<any> {
    return this.http.get(`${this.apiUrl}/addspecificationTodetail/${id}?myspec=${idspec}` );
  }
  addsupTodetail(id: number, idsup: number ): Observable<any> {
    return this.http.get(`${this.apiUrl}/addsupplementTodetail/${id}?mysup=${idsup}` );
  }
  addtypTodetail(id: number, idtyp: number ): Observable<any> {
    return this.http.get(`${this.apiUrl}/addtypologieTodetail/${id}?mytyp=${idtyp}` );
  }
  addrepTodetail(id: number, idrep: number ): Observable<any> {
    return this.http.get(`${this.apiUrl}/addrepartitionTodetail/${id}?myrep=${idrep}` );
  }
  getDetailByHotelId(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/getDetailByHotelId/${id}` );
  }
  getlogementByIdHotel(id: number , du: any , au: any): Observable<any> {
    return this.http.get(`${this.apiUrl}/getlistLogementbyDetail/${id}?du=${du}&au=${au}`);
  }
  getsupplementByHotel(id: number): Observable<any> {
  return this.http.get(`${this.apiUrl}/getlistSupplementbyDetail/${id}`);
  }
  getspecifiationByHotel( id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/getlistSpecificationbyDetail/${id}`);
  }
  gettypolologiebyHotel(id: number , nbrP: number): Observable <any> {
    return this.http.get(`${this.apiUrl}/getlistTypologiebyDetail/${id}?nbrP=${nbrP}`);
  }
  getrepartitionByHotel(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/getlistRepartitiontbyDetail/${id}`);
  }

}
