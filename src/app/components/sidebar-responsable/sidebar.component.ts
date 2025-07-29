import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/dashboard', title: 'Tableau de bordd',  icon: 'dashboard', class: '' },
    { path: '/user-profile', title: 'Profil',  icon:'person', class: '' },
    { path: '/table-list', title: 'Saisir un BS',  icon:'content_paste', class: '' },
    { path: '/typography', title: 'Historique des dossiers',  icon:'library_books', class: '' },
    { path: '/notifications', title: 'Notifications',  icon:'notifications', class: '' },
    { path: '/icons', title: 'Réclamation',  icon:'feedback', class: '' },
    { path: '/maps', title: 'Aide / Support',  icon:'help_outline', class: '' },
    { path: '/upgrade', title: 'Déconnexion',  icon:'logout', class: 'active-pro' },
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
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };
}
