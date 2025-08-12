import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

   private baseUrl = 'http://localhost:8080/user';

  constructor(private http: HttpClient) {}

  register(user: User): Observable<any> {
    return this.http.post(`${this.baseUrl}/register`, user);
  }
  
   getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.baseUrl}/all`);
  }

  deleteUser(iduser: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${iduser}`);
  }


}
