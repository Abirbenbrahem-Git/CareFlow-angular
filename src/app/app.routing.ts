import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { AgentLayoutComponent } from './layouts/agent-layout/agent-layout.component';
import { AbirComponent } from './abir/abir.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ResponsableLayoutComponent } from './layouts/responsable-layout/responsable-layout.component';

const routes: Routes =[
  {path: 'abir',component:AbirComponent},
  {path: 'signup',component:SignUpComponent},
  {
    path: 'responsable',
    component: ResponsableLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./layouts/responsable-layout/responsable-layout.module').then(
            (m) => m.ResponsableLayoutModule
          ),
      },
    ],
  },
 {
    path: 'agent',
    component: AgentLayoutComponent,
    children: [{
      path: '',
      loadChildren: () => import('./layouts/agent-layout/agent-layout.module').then(m => m.AgentLayoutModule)
    }]
  },
  {path: '',component:SignInComponent},
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes,{
       useHash: true
    })
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
