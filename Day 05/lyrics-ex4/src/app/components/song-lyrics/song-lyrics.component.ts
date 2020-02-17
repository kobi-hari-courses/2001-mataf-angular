import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from 'src/app/core/services/data.service';
import { ActivatedRoute } from '@angular/router';
import { map, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-song-lyrics',
  templateUrl: './song-lyrics.component.html',
  styleUrls: ['./song-lyrics.component.css']
})
export class SongLyricsComponent implements OnInit {
  title$: Observable<string>;
  lyrics$: Observable<string>;

  constructor(
    private data: DataService, 
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.title$ = this.route.params.pipe(
      map(prm => prm['name']));

      this.lyrics$ = this.title$.pipe(
      switchMap(name => this.data.getLyrics(name))
    );
  }

}
