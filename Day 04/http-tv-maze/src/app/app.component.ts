import { DataService } from './services/data.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Show } from './models/models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit {
  shows: Promise<Show[]>;

  constructor(private data: DataService) 
  {  }

  ngOnInit(): void {
    this.shows = this.data.getAllShows();
  }
}
