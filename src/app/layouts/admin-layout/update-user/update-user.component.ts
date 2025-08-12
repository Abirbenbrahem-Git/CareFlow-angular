import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'app/services/user.service';
import { User } from 'app/services/user.model';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.scss']
})
export class UpdateUserComponent implements OnInit {

  user!: User;
  userId!: number;

  constructor(
    private userService: UserService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.userId = Number(this.route.snapshot.paramMap.get('iduser'));
    this.userService.getUserById(this.userId).subscribe(user => {
      this.user = user;
    });
  }

  onSubmit() {
    this.userService.updateUser(this.userId, this.user).subscribe(() => {
      alert('Utilisateur modifié avec succès');
      this.router.navigate(['/admin/users']);
    });
  }

}
