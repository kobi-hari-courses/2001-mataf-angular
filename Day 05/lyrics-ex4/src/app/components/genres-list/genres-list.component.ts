import { DataService } from './../../core/services/data.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-genres-list',
  templateUrl: './genres-list.component.html',
  styleUrls: ['./genres-list.component.css']
})
export class GenresListComponent implements OnInit {
  genres: string[] = [];

  constructor(
    private data: DataService, 
    private router: Router
  ) { }

  async ngOnInit() {
    this.genres = await this.data.getAllGenres();
  }

  selectGenre(genre: string) {
    this.router.navigate(['genres', genre])
  }

}
