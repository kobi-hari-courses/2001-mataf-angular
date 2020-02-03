import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RandomizerService {
  constructor() { }

  private delay(millis: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, millis));
  }

  async next(min: number, max: number): Promise<number> {
    let range = max - min;
    let rnd = Math.round(Math.random()*range);

    let p = this.delay(Math.random()* 5000);
    await p;

    return min + rnd;
  }

  nextMany(min: number, max: number, count: number): Promise<number[]> {
    let promises: Promise<number>[] = [];

    for (let i = 0; i< count; i++) {
      let promise = this.next(min, max);
      promises.push(promise);
    }

    let pa = Promise.all(promises);
    return pa;
  }
}
