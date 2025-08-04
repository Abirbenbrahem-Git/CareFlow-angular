import { Component, OnInit } from '@angular/core';
import { BulletinService, Bulletin } from '../services/bulletin.service';
@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.css']
})
export class TableListComponent implements OnInit {

  bulletins: Bulletin[] = [];
  constructor(private bulletinService: BulletinService) { }

   ngOnInit(): void {
    this.bulletinService.getAllBulletins().subscribe(data => {
      this.bulletins = data;
    });
  }

}
