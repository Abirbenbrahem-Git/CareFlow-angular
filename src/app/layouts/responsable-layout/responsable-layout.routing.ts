import { Routes } from '@angular/router';
import { DashboardComponent } from 'app/dashboard/dashboard.component';
import { IconsComponent } from 'app/icons/icons.component';
import { NotificationsComponent } from 'app/notifications/notifications.component';

import { SignInComponent } from 'app/sign-in/sign-in.component';
import { TypographyComponent } from 'app/typography/typography.component';
import { UserProfileComponent } from 'app/user-profile/user-profile.component';

export const ResponsableLayoutRoutes: Routes = [
    // {
    //   path: '',
    //   children: [ {
    //     path: 'dashboard',
    //     component: DashboardComponent
    // }]}, {
    // path: '',
    // children: [ {
    //   path: 'userprofile',
    //   component: UserProfileComponent
    // }]
    // }, {
    //   path: '',
    //   children: [ {
    //     path: 'icons',
    //     component: IconsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'notifications',
    //         component: NotificationsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'maps',
    //         component: MapsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'typography',
    //         component: TypographyComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'upgrade',
    //         component: UpgradeComponent
    //     }]
    // }
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'signin',        component: SignInComponent },
    { path: 'user-profile',   component: UserProfileComponent },
    { path: 'icons',          component: TypographyComponent },
    { path: 'maps',           component: IconsComponent },
    { path: 'notifications',  component: NotificationsComponent },
];
