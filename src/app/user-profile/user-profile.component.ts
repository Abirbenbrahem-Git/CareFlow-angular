import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  user: any = {};

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    const storedUser = localStorage.getItem('currentUser');
    if (storedUser) {
      this.user = JSON.parse(storedUser);
    }
  }

  onUpdateProfile() {
    this.http.put(`http://localhost:8080/user/${this.user.iduser}`, this.user)
      .subscribe({
        next: (updatedUser: any) => {
          this.user = updatedUser;
          localStorage.setItem('currentUser', JSON.stringify(updatedUser));
          alert('Profil mis à jour avec succès');
        },
        error: () => {
          alert('Erreur lors de la mise à jour du profil');
        }
      });
  }

}
