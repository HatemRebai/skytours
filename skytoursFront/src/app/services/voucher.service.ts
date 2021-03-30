import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Voucher } from '../interfaces/voucher';

@Injectable({
  providedIn: 'root'
})
export class VoucherService {

  constructor(private http: HttpClient) { }

  apiUrl = 'http://localhost:9090/voucher';
  voucher: Voucher;


  add(voucher: Voucher): Observable<any> {
    return this.http.post(`${this.apiUrl}/addVoucher`, voucher);
  }
  getAll(): Observable<any> {
    return this.http.get(`${this.apiUrl}/getAllVoucher`);
  }
}
