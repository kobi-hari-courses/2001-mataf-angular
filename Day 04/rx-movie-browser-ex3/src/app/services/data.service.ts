import { ALL_MOVIES } from './../models/all-movies';
import { Injectable } from '@angular/core';
import { Movie } from '../models/movie';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor() { }

  private delay(millis: number): Promise<void> {
    return new Promise<void>(resolve => setTimeout(resolve, millis));
  }

  async getAllTitle(): Promise<string[]> {
    await this.delay(2500);
    return ALL_MOVIES.map(m => m.caption);    
  }

  async getMovie(title: string): Promise<Movie> {
    await this.delay(1500);
    return ALL_MOVIES.find(m => m.caption === title);
  }
}
