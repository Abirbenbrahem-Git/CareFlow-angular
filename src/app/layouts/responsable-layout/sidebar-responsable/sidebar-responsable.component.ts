import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/responsable/dashboard', title: 'Tableau de bord',  icon: 'dashboard', class: '' },
    { path: '/responsable/user-profile', title: 'Profil',  icon:'person', class: '' },
    { path: '/responsable/form', title: 'Validation des dossiers',  icon:'check_circle', class: '' },
    { path: '/responsable/notifications', title: 'Notifications',  icon:'notifications', class: '' },
    { path: '/responsable/icons', title: 'Réclamation',  icon:'feedback', class: '' },
    { path: '/responsable/maps', title: 'Aide / Support',  icon:'help_outline', class: '' },
    { path: '/signin', title: 'Déconnexion',  icon:'logout', class: 'active-pro' },
];

@Component({
  selector: 'app-sidebar-responsable',
  templateUrl: './sidebar-responsable.component.html',
  styleUrls: ['./sidebar-responsable.component.scss']
})
export class SidebarResponsableComponent implements OnInit {
menuItems: any[];

  constructor() { }

  ngOnInit(): void {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
   isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };

}
