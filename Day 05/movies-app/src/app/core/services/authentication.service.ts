import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private state = false;
  private state$ = new BehaviorSubject<boolean>(this.state);

  constructor() { }

  isLoggedIn(): Observable<boolean> {
    return this.state$.asObservable();
  }

  login() {
    this.state = true;
    this.state$.next(this.state);
  }

  logout() {
    this.state = false;
    this.state$.next(this.state);
  }
}
