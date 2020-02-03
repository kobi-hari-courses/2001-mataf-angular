import { ALL_MOVIES } from './../models/all-movies';
import { Injectable } from '@angular/core';
import { Movie } from '../models/movie';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor() { }

  private delay(millis: number): Promise<void> {
    return new Promise<void>
    (resolve => setTimeout(resolve, millis));
  }

  async getAllCaptions(): Promise<string[]> {
      await this.delay(5000);
      return ALL_MOVIES.map(m => m.caption);

  }

  async getMovie(caption: string): Promise<Movie> {
    await this.delay(2000);
    return ALL_MOVIES.find(m => m.caption === caption);
  }
}
