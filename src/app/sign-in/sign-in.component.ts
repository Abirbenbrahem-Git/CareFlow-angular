import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'app/services/auth.service';
import { LoginResponse } from 'app/services/login-response';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  email: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  onLogin() {
    const credentials = {
      mail: this.email,
      motdepasse: this.password
    };

    this.authService.login(credentials).subscribe({
  next: (user: any) => {
    localStorage.setItem('currentUser', JSON.stringify(user));

    if (user.role === 'agent') {
      this.router.navigate(['/agent/dashboard']);
    } else if (user.role === 'responsable') {
      this.router.navigate(['/responsable/dashboard']);
    } else {
      this.router.navigate(['/admin']);
    }
  },
  error: () => {
    this.errorMessage = 'Email ou mot de passe incorrect.';
  }
});

  }

  ngOnInit(): void {
  }

}
