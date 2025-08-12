import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../services/user.service';
import { User } from '../../../services/user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.scss']
})
export class UserManagementComponent implements OnInit {

  users: User[] = [];

  constructor(private userService: UserService, private router: Router) {}

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers(): void {
    this.userService.getAllUsers().subscribe({
      next: (data) => {
        this.users = data;
      },
      error: (err) => {
        console.error('Erreur lors du chargement des utilisateurs', err);
      }
    });
  }

  deleteUser(iduser: number): void {
  if (confirm("Voulez-vous vraiment supprimer cet utilisateur ?")) {
    this.userService.deleteUser(iduser).subscribe({
      next: () => {
        this.users = this.users.filter(user => user.iduser !== iduser);
        alert('Utilisateur supprimé avec succès.');
      },
      error: err => {
        console.error('Erreur lors de la suppression', err);
        alert('Erreur lors de la suppression de l\'utilisateur.');
      }
    });
  }
}
     goToUpdateUser(id: number) {
      this.router.navigate(['/admin/users/update', id]);
     }

}
