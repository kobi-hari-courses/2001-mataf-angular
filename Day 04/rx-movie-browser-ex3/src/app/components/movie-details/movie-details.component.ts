import { DataService } from './../../services/data.service';
import { StateService } from './../../services/state.service';
import { Component, OnInit, ɵSWITCH_TEMPLATE_REF_FACTORY__POST_R3__ } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie } from 'src/app/models/movie';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {
  movie$: Observable<Movie>;

  constructor(
    private state: StateService, 
    private data: DataService
  ) { }

  ngOnInit() {
    this.movie$ = this.state.getSelected().pipe(
      switchMap(title => this.data.getMovie(title))
    );
  }

}
