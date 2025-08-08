import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResponsableLayoutComponent } from './responsable-layout.component';
import { SidebarResponsableComponent } from './sidebar-responsable/sidebar-responsable.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ResponsableLayoutRoutes } from './responsable-layout.routing';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatRippleModule} from '@angular/material/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatSelectModule} from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';

@NgModule({
  declarations: [
    ResponsableLayoutComponent,
    SidebarResponsableComponent,
    
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(ResponsableLayoutRoutes),
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
export class ResponsableLayoutModule { }
