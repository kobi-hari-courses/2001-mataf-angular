import { AuthenticationService } from './core/services/authentication.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  isLoggedIn$: Observable<boolean>;

  constructor(
    private auth: AuthenticationService
  ){}

  ngOnInit(): void {
    this.isLoggedIn$ = this.auth.isLoggedIn();
  }

}
