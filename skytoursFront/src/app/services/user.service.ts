import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { LocalStorage } from 'ngx-webstorage';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  apiUrl = '/user';
  user: User;
  username: string;
  token: string;
  @LocalStorage() userconnect;

 /* login(request: any){
    return this.http.post(`${this.apiUrl}/login`, request, { observe: 'response'});
  }
  add(user: User ): Observable<any> {
    return this.http.post(`${this.apiUrl}/addUser`, user);
  }
  put(id: number, user: any): Observable<any> {
     return this.http.put(`${this.apiUrl}/updateUser/${id}`, user );
  }
  getOne(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/userById/${id}`);
  }
  getAll(): Observable<any> {
    return this.http.get(`${this.apiUrl}/users`);
  }
  getUserbyName(name: String): Observable<any> {
    return this.http.get(`${this.apiUrl}//userByName//${name}`);
  }

  userInlocalstorage(username) {
    this.getUserbyName(this.username).subscribe(
      data => { this.userconnect = data;
      },
      err => {}
    );
  }
  */

 /* login(request: any){
    return this.http.post(`${this.apiUrl}/login`, request, { observe: 'response'});
    } */
  getUsers() {
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
    headers.append('Authorization', 'Bearer ' + localStorage.getItem('token'));
    headers.append('Accept', 'application/json');
   // const headers = new HttpHeaders({'authorization ': localStorage.getItem('token')});
    return this.http.get(`${this.apiUrl}/users`, {headers: headers});

  }
  save(user: any) {
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
    headers.append('Authorization', 'Bearer ' + localStorage.getItem('token'));
    headers.append('Accept', 'application/json');

    return this.http.post(`${this.apiUrl}/addUser`, user, { headers: headers});

  }
  getuserById(id: number) {
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
    headers.append('Authorization', 'Bearer ' + localStorage.getItem('token'));
    headers.append('Accept', 'application/json');

    return this.http.get(`${this.apiUrl}/getuser/${id}`, {headers: headers});

  }
  Update(id: number, user: any) {
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
    headers.append('Authorization', 'Bearer ' + localStorage.getItem('token'));
    headers.append('Accept', 'application/json');

    return this.http.put(`${this.apiUrl}/updateUser/${id}`, user, {headers: headers});

  }
  deleteUser(id: number) {
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
    headers.append('Authorization', 'Bearer ' + localStorage.getItem('token'));
    headers.append('Accept', 'application/json');

    return this.http.delete(`${this.apiUrl}/deleteUser/${id}` , {headers: headers});

  }
  login(request) {

    return this.http.post(`${this.apiUrl}/login`, request, {observe: 'response'});
    }

  getUserByUserName(username: string) {
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
    headers.append('Authorization', 'Bearer ' + localStorage.getItem('token'));
    headers.append('Accept', 'application/json');

    return this.http.get(`${this.apiUrl}/userByUsername/${username}` , {headers: headers});
  }

  saveToken(token) {
    const helper = new JwtHelperService();
    this.token = token;
    const decode = helper.decodeToken(token);
    console.log(decode);

    this.username = decode.sub;

    this.getUserByUserName(this.username).subscribe(
      data => { this.userconnect = data; },
      err => {}
    );
  }
 }

