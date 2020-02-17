import { DataService } from './../../core/services/data.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
import { map, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-songs-of-genre',
  templateUrl: './songs-of-genre.component.html',
  styleUrls: ['./songs-of-genre.component.css']
})
export class SongsOfGenreComponent implements OnInit {
  title$: Observable<string>;
  songs$: Observable<string[]>;

  constructor(
    private data: DataService, 
    private router: Router, 
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.title$ = this.route.params.pipe(
      map(prm => prm['name']));

      this.songs$ = this.title$.pipe(
      switchMap(name => this.data.getSongsOfGenre(name))
    );
  }

  selectSong(song: string) {
    this.router.navigate(['songs', song]);
  }

}
