import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Client } from '../interfaces/client';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private http: HttpClient) { }


  apiUrl = 'http://localhost:9090/client';
  client: Client;


  getClient(): Observable<any> {
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
    headers.append('Authorization', 'Bearer ' + localStorage.getItem('token'));
    headers.append('Accept', 'application/json');
    return this.http.get(`${this.apiUrl}/getAllClt` , {headers: headers});
  }
  addClient(client: Client): Observable<any> {
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
    headers.append('Authorization', 'Bearer ' + localStorage.getItem('token'));
    headers.append('Accept', 'application/json');
    return this.http.post(`${this.apiUrl}/addClient`, client , {headers: headers});
  }
  putData(id: number, client: any): Observable<any> {
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
    headers.append('Authorization', 'Bearer ' + localStorage.getItem('token'));
    headers.append('Accept', 'application/json');

     return this.http.put(`${this.apiUrl}/updateClient/${id}`, client , {headers: headers} );
  }
  getOne(id: number): Observable<any> {
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
    headers.append('Authorization', 'Bearer ' + localStorage.getItem('token'));
    headers.append('Accept', 'application/json');
    return this.http.get(`${this.apiUrl}/getById/${id}`, {headers: headers} );
  }
  getByName(name: any): Observable<any> {
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
    headers.append('Authorization', 'Bearer ' + localStorage.getItem('token'));
    headers.append('Accept', 'application/json');
    return this.http.get(`${this.apiUrl}/getByName/${name}` , {headers: headers} );
  }
}
