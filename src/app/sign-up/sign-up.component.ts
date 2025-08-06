import { Component, OnInit } from '@angular/core';
import { User } from '../services/user.model';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  user: User = {
    cin: 0,
    nom: '',
    prenom: '',
    mail: '',
    numtel: 0,
    motdepasse: '',
    residence: '',
    role: 'agent'
  };

  constructor(private userService: UserService, private router: Router) {}
  
  ngOnInit(): void {
  }

  onSubmit() {
    this.userService.register(this.user).subscribe({
      next: (res) => {
        alert('Inscription réussie !');
        this.router.navigate(['/signin']);
      },
      error: (err) => {
        alert('Erreur lors de l’inscription.');
        console.error(err);
      }
    });
  }

 
}
