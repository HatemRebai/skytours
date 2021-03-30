import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DetailtypologieService {

  constructor(private http: HttpClient) { }

  apiUrl = 'http://localhost:9090/detailtypologie';


  addTypologieDetail(id: number, idtyp: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/addDT/${id}?mytyp=${idtyp}`);
  }
  typolologiebyHotel(id: number , nbrP: number): Observable <any> {
    return this.http.get(`${this.apiUrl}/getTypologiebyDetail/${id}?nbrP=${nbrP}`);
  }
}
