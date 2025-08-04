import { Component, OnInit } from '@angular/core';
import { BulletinService } from '../services/bulletin.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  bulletin: any = {
    reference: '',
    nomadherent: '',
    nommalade: '',
    typemalade: '',
    adresse: '',
    datenaissance: '',
    datedepot: '',
    datesoin: '',
    etat: 'en_cours'
  };

  selectedFile: File | null = null;

  constructor(private bulletinService: BulletinService) { }

  ngOnInit() {
    
  }
  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }

  onSubmit() {
    if (this.selectedFile) {
      const formData = new FormData();
      for (let key in this.bulletin) {
        formData.append(key, this.bulletin[key]);
      }
      formData.append('fichier', this.selectedFile);

      this.bulletinService.createBulletin(formData).subscribe({
        next: res => {
          alert("Bulletin envoyé avec succès !");
        },
        error: err => {
          console.error(err);
          alert("Erreur lors de l'envoi du bulletin");
        }
      });
    }
  }


  
}