import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StateService {
  private selected: string = '';
  private selected$ = new BehaviorSubject<string>(this.selected);

  getSelected(): Observable<string> {
    return this.selected$.asObservable();
  }

  setSelected(title: string) {
    this.selected = title;
    this.selected$.next(this.selected);
  }
  
}
