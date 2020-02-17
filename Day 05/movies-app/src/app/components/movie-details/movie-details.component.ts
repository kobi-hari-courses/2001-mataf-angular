import { DataService } from './../../core/services/data.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Movie } from 'src/app/core/models/movie';
import { Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {
  movie$: Observable<Movie>;

  constructor(
    private data: DataService, 
    private route: ActivatedRoute, 
    private router: Router
  ) { }

  async ngOnInit() {
    this.movie$ = this.route.params.pipe(
      map(prm => Number(prm['ord'])), 
      switchMap(ord => this.data.getMovieByIndex(ord))
    );
  }

  goNext() {
    let ord = Number(this.route.snapshot.params['ord']);
    this.router.navigate(['movies', ord + 1]);
  }

  goPrev() {
    let ord = Number(this.route.snapshot.params['ord']);
    this.router.navigate(['movies', ord - 1]);
  }

  goEdit() {
    let ord = Number(this.route.snapshot.params['ord']);
    this.router.navigate(['movies', ord, 'edit']);
  }

}
