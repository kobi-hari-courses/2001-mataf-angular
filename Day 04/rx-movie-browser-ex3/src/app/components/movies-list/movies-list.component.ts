import { StateService } from './../../services/state.service';
import { DataService } from './../../services/data.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css']
})
export class MoviesListComponent implements OnInit {
  captions: string[] = [];
  selectedCaption$: Observable<string>;

  constructor(
    private data: DataService, 
    private state: StateService
  ) { }

  async ngOnInit() {
    this.captions = await this.data.getAllTitle();
    this.selectedCaption$ = this.state.getSelected();
  }

  setSelected(value: string) {
    this.state.setSelected(value);  
  }

}
