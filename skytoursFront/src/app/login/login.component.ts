import { UserService } from './../services/user.service';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorage, LocalStorageService } from 'ngx-webstorage';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'] ,
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent implements OnInit {

  response: any = { "token" : '' };

  @LocalStorage()   userconnect: any;
  username: any ;
  password: any;

  constructor(private userService: UserService, private route: Router, private local: LocalStorageService) { }


  ngOnInit(): void {
  }
  verification(request) {
    this.userService.login(request).subscribe(
      data => {
            this.response = data.body;
            let token = this.response.token;
            localStorage.setItem("token", token );
            this.userService.saveToken(token);

            this.route.navigate(['/adminLayout']);
      },
      err => {
      }
    );
  }
}
