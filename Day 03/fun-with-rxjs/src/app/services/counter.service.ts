import { BehaviorSubject, Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterService {
  private value: number = 0;
  private value$ = new BehaviorSubject(this.value);

  getValue(): Observable<number> {
    return this.value$.asObservable();
  }

  increase() {
    this.value$.next(++this.value);
  }

  decrease() {
    this.value$.next(--this.value);
  }

  constructor() { }
}
