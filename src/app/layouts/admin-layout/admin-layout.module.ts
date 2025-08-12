import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminLayoutComponent } from './admin-layout.component';
import { SidebarAdminComponent } from './sidebar-admin/sidebar-admin.component';
import { AdminLayoutRoutes } from './admin-layout.routing';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatRippleModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatRadioModule } from '@angular/material/radio';
import { UserManagementComponent } from './user-management/user-management.component';
import { UpdateUserComponent } from './update-user/update-user.component';

@NgModule({
  declarations: [
    AdminLayoutComponent,
    SidebarAdminComponent,
    UserManagementComponent,
    UpdateUserComponent
  ],
    imports: [
      CommonModule,
      RouterModule.forChild(AdminLayoutRoutes),
      FormsModule,
      ReactiveFormsModule,
      MatButtonModule,
      MatRippleModule,
      MatFormFieldModule,
      MatInputModule,
      MatSelectModule,
      MatTooltipModule,
      MatRadioModule,
      
    ]
})
export class AdminLayoutModule { }
