import { Component, OnInit } from '@angular/core';
import { Bulletin, BulletinService } from '../services/bulletin.service';
import { saveAs } from 'file-saver';
@Component({
  selector: 'app-validation',
  templateUrl: './validation.component.html',
  styleUrls: ['./validation.component.scss']
})
export class ValidationComponent implements OnInit {

bulletins: Bulletin[] = [];

  constructor(private bulletinService: BulletinService) {}

  ngOnInit(): void {
    this.loadBulletins();
  }

  loadBulletins(): void {
  this.bulletinService.getBulletinsEnCours().subscribe({
    next: (data) => this.bulletins = data,
    error: (err) => console.error('Erreur lors du chargement des bulletins en cours', err)
  });
}
  downloadFile(id: number, reference: string): void {
    this.bulletinService.downloadFile(id).subscribe({
      next: (fileBlob) => {
        saveAs(fileBlob, `${reference}.pdf`);
      },
      error: (err) => console.error('Erreur lors du téléchargement', err)
    });
  }

  updateEtat(id: number, etat: string): void {
    this.bulletinService.updateEtat(id, etat).subscribe({
      next: () => {
        console.log(`Bulletin ${id} mis à jour en ${etat}`);
        this.bulletins = this.bulletins.filter(b => b.idbulletin !== id);
      },
      error: (err) => console.error('Erreur lors de la mise à jour de l’état', err)
    });
  }
}
