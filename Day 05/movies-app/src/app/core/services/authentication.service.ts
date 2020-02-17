import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private nextUrl: string | null = null;


  private state = false;
  private state$ = new BehaviorSubject<boolean>(this.state);

  constructor(
    private router: Router
  ) { }

  isLoggedIn(): Observable<boolean> {
    return this.state$.asObservable();
  }

  setNextUrl(url: string) {
    this.nextUrl = url;
  }

  login() {
    this.state = true;
    this.state$.next(this.state);
    if (this.nextUrl !== null) {
      this.router.navigateByUrl(this.nextUrl);
      this.nextUrl = null;
    }
  }

  logout() {
    this.state = false;
    this.state$.next(this.state);
  }
}
