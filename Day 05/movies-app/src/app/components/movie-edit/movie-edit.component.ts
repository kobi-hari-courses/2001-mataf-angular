import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie } from 'src/app/core/models/movie';
import { DataService } from 'src/app/core/services/data.service';
import { ActivatedRoute } from '@angular/router';
import { map, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-movie-edit',
  templateUrl: './movie-edit.component.html',
  styleUrls: ['./movie-edit.component.css']
})
export class MovieEditComponent implements OnInit {
  movie$: Observable<Movie>;

  constructor(
    private data: DataService, 
    private route: ActivatedRoute, 
  ) { }

  ngOnInit() {
    this.movie$ = this.route.params.pipe(
      map(prm => Number(prm['ord'])), 
      switchMap(ord => this.data.getMovieByIndex(ord))
    );
  }

}
