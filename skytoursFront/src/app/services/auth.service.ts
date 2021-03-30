import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

   constructor( private route: Router) { }
  canActivate() {
  const token = localStorage.getItem('token');
  if (token) {
  return true;
  } else {
  this.route.navigate(['/login']);
  return false;
  }
  }
}
