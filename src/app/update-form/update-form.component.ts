import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BulletinService } from 'app/services/bulletin.service';
@Component({
  selector: 'app-update-form',
  templateUrl: './update-form.component.html',
  styleUrls: ['./update-form.component.scss']
})
export class UpdateFormComponent implements OnInit {
 bulletinId!: number;
  bulletin: any = {
    reference: '',
    nomadherent: '',
    nommalade: '',
    typemalade: '',
    adresse: '',
    datenaissance: '',
    datedepot: '',
    datesoin: '',
    etat: '',
    fichier: '',
  };

  selectedFile!: File;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private bulletinService: BulletinService
  ) {}

  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('idbulletin');
    if (idParam) {
      this.bulletinId = Number(idParam);
      this.bulletinService.getBulletinById(this.bulletinId).subscribe(data => {
        this.bulletin = {
          ...data,
          datenaissance: data.datenaissance ? data.datenaissance.substring(0, 10) : '',
          datedepot: data.datedepot ? data.datedepot.substring(0, 10) : '',
          datesoin: data.datesoin ? data.datesoin.substring(0, 10) : ''
        };
      });
    }
  }

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }

  onSubmit() {
    const formData = new FormData();
    formData.append('reference', this.bulletin.reference);
    formData.append('nomadherent', this.bulletin.nomadherent);
    formData.append('nommalade', this.bulletin.nommalade);
    formData.append('typemalade', this.bulletin.typemalade);
    formData.append('adresse', this.bulletin.adresse);
    formData.append('datenaissance', this.bulletin.datenaissance);
    formData.append('datedepot', this.bulletin.datedepot);
    formData.append('datesoin', this.bulletin.datesoin);
    formData.append('etat', this.bulletin.etat);

    if (this.selectedFile) {
      formData.append('fichier', this.selectedFile);
    }

    this.bulletinService.updateBulletin(this.bulletinId, formData).subscribe(() => {
      alert('Bulletin modifié avec succès');
      this.router.navigate(['/agent/typography']);

    });
  }
}

