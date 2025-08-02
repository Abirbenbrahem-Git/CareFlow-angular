import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/agent/dashboard', title: 'Tableau de bord',  icon: 'dashboard', class: '' },
    { path: '/agent/user-profile', title: 'Profil',  icon:'person', class: '' },
    { path: '/agent/form', title: 'Saisir un BS',  icon:'content_paste', class: '' },
    { path: '/agent/typography', title: 'Historique des dossiers',  icon:'library_books', class: '' },
    { path: '/agent/notifications', title: 'Notifications',  icon:'notifications', class: '' },
    { path: '/agent/icons', title: 'Réclamation',  icon:'feedback', class: '' },
    { path: '/agent/maps', title: 'Aide / Support',  icon:'help_outline', class: '' },
    { path: '/signin', title: 'Déconnexion',  icon:'logout', class: 'active-pro' },
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
