import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/core/services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-songs-list',
  templateUrl: './songs-list.component.html',
  styleUrls: ['./songs-list.component.css']
})
export class SongsListComponent implements OnInit {
  songs: string[] = [];

  constructor(
    private data: DataService, 
    private router: Router
  ) { }

  async ngOnInit() {
    this.songs = await this.data.getAllSongs();
  }

  selectSong(song: string) {
    this.router.navigate(['songs', song])
  }

}
