import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RandomizerService {
  constructor() { }

  next(min: number, max: number) {
    let range = max - min;
    let rnd = Math.round(Math.random()*range);
    return rnd + min;
  }
}
