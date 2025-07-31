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

@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ComponentsModule,
    RouterModule,
    AppRoutingModule,
  ],
  declarations: [
    AppComponent,
    AgentLayoutComponent,
    AbirComponent,
    SignInComponent,
    SignUpComponent,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
