import { Component, OnInit } from '@angular/core';

declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    // { path: '/dashboard', title: 'Dashboard',  icon: 'design_app', class: '' },
     { path: '/adminLayout/users', title: 'User',  icon: 'business_badge', class: '' },
   //  { path: '/icons', title: 'Icons',  icon: 'education_atom', class: '' },
    // { path: '/maps', title: 'Maps',  icon: 'location_map-big', class: '' },
    // { path: '/notifications', title: 'Notifications',  icon: 'ui-1_bell-53', class: '' },

    // { path: '/user-profile', title: 'User Profile',  icon: 'users_single-02', class: '' },
    // { path: '/detailhotel', title: 'detail hotel',  icon: 'design_bullet-list-67', class: '' },
    // { path: '/typography', title: 'Typography',  icon: 'text_caps-small', class: '' },
    { path: '/adminLayout/client', title: 'Client',  icon: 'users_single-02', class: '' },
    { path: '/adminLayout/agence', title: 'Agence',  icon: 'business_bank', class: '' },
    { path: '/adminLayout/hotel', title: 'Hotel',  icon: 'travel_istanbul', class: '' },
    { path: '/adminLayout/reservation', title: 'Reservation',  icon: 'travel_istanbul', class: '' },
    { path: '/adminLayout/voucher', title: 'Voucher',  icon: 'travel_istanbul', class: '' },

];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
      if ( window.innerWidth > 991) {
          return false;
      }
      return true;
  }
  openNav() {
    document.getElementById('mySidenav').style.width = '200px';
    document.getElementById('main').style.marginLeft = '200px';
  }

  closeNav() {
    document.getElementById('mySidenav').style.width = '0';
    document.getElementById('main').style.marginLeft = '0';
  }
}
