import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Bulletin {
  idbulletin: number;
  reference: string;
  nomadherent: string;
  nommalade: string;
  typemalade: string;
  adresse: string;
  datenaissance: string;
  datedepot: string;
  datesoin: string;
  etat: string;
  fichier?: any; 
}
@Injectable({
  providedIn: 'root'
})
export class BulletinService {
 private apiUrl = 'http://localhost:8080/bulletins';

  constructor(private http: HttpClient) {}

  getAllBulletins(): Observable<Bulletin[]> {
    return this.http.get<Bulletin[]>(`${this.apiUrl}/all`);
  }

  createBulletin(formData: FormData): Observable<any> {
  return this.http.post(`${this.apiUrl}/post`, formData);
  }

  deleteBulletin(id: number): Observable<string> {
    return this.http.delete(`${this.apiUrl}/delete/${id}`, { responseType: 'text' });
  }

}
