import { ALL_SONGS } from './../models/all-songs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor() { }

  async getAllGenres(): Promise<string[]> {
    return ALL_SONGS
      .map(s => s.genres)
      .reduce((a, b) => a.concat(b))
      .filter((s, i, all) => all.indexOf(s) === i);
  }

  async getAllSongs(): Promise<string[]> {
    return ALL_SONGS.map(s => s.title);

  }

  async getSongsOfGenre(genre: string): Promise<string[]> {
    return ALL_SONGS
      .filter(s => s.genres.includes(genre))
      .map(s => s.title);
  }

  async getLyrics(title: string): Promise<string> {
    return ALL_SONGS.find(s => s.title === title).lyrics;
  }

}
