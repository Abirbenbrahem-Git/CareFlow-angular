import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';
import { AppComponent } from './app.component';
import { AgentLayoutComponent } from './layouts/agent-layout/agent-layout.component';
import { AbirComponent } from './abir/abir.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ResponsableLayoutModule } from './layouts/responsable-layout/responsable-layout.module';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatIconModule } from '@angular/material/icon'; 
import { MatButtonModule } from '@angular/material/button';
import { ValidationComponent } from './validation/validation.component';
import { AdminLayoutModule } from './layouts/admin-layout/admin-layout.module'; 

@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ComponentsModule,
    RouterModule,
    AppRoutingModule,
    ResponsableLayoutModule,
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule,
    MatIconModule,
    MatButtonModule,
    AdminLayoutModule,
  ],
  declarations: [
    AppComponent,
    AgentLayoutComponent,
    AbirComponent,
    SignInComponent,
    SignUpComponent,
    UserProfileComponent,
    ValidationComponent

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
