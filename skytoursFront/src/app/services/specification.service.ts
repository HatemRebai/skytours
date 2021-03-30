import { Specification } from './../interfaces/specification';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class SpecificationService {

  constructor(private http: HttpClient) { }

  apiUrl = 'http://localhost:9090/specification';
  specification: Specification;

  add(specification: Specification ): Observable<any> {
    return this.http.post(`${this.apiUrl}/addSpecification`, specification);
  }
  put(id: number, specification: any): Observable<any> {
     return this.http.put(`${this.apiUrl}/updateS/${id}`, specification );
  }
  getOne(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/specifictaion/${id}`);
  }
  getAll(): Observable<any> {
    return this.http.get(`${this.apiUrl}/listSpecification`);
  }
}
