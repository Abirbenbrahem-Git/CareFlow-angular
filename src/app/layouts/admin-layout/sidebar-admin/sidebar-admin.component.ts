import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/admin/dashboard', title: 'Tableau de bord',  icon: 'dashboard', class: '' },
    { path: '/admin/user-profile', title: 'Profil administratif',  icon:'person', class: '' },
    { path: '/admin/users', title: 'Gestion utilisateurs',  icon:'group', class: '' },
    { path: '/admin/form', title: 'Saisir un BS',  icon:'content_paste', class: '' },
    { path: '/admin/valid', title: 'Suivi dossiers',  icon:'assignment', class: '' },
    { path: '/admin/notifications', title: 'Notifications',  icon:'notifications', class: '' },
    { path: '/admin/icons', title: 'Réclamation',  icon:'feedback', class: '' },
    { path: '/admin/maps', title: 'Aide / Support',  icon:'help_outline', class: '' },
    { path: '/signin', title: 'Déconnexion',  icon:'logout', class: 'active-pro' },
];


@Component({
  selector: 'app-sidebar-admin',
  templateUrl: './sidebar-admin.component.html',
  styleUrls: ['./sidebar-admin.component.scss']
})
export class SidebarAdminComponent implements OnInit {
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
