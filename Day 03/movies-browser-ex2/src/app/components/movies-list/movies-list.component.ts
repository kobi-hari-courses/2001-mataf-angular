import { DataService } from './../../services/data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css']
})
export class MoviesListComponent implements OnInit {
  captions: string[] = [];
  isBusy: boolean = false;

  constructor(private data: DataService) { }

  async ngOnInit() {
    this.isBusy = true;
    this.captions = await this.data.getAllCaptions();
    this.isBusy = false;
  }

}
