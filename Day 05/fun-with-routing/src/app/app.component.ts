import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private router: Router){}

  goRandom() {
    const options = ['a', 'b', 'c'];
    const index = Math.floor(Math.random()*3);
    const newPath = options[index];

    this.router.navigate([newPath]);
  }
}
