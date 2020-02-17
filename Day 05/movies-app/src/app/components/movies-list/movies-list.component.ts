import { DataService } from './../../core/services/data.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css']
})
export class MoviesListComponent implements OnInit {
  titles: string[] = [];

    constructor(
    private data: DataService, 
    private router: Router
  ) { }

  async ngOnInit() {
    this.titles = await this.data.getAllTitles();
  }

  selectMovieIndex(index: number) {
    this.router.navigate(['movies', index]);
  }

}
