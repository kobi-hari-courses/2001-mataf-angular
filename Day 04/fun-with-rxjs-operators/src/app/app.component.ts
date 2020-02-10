import { Component } from '@angular/core';
import { Observable, from, interval } from 'rxjs';
import { map, take, skip, filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  createObservable(): Observable<number> {
    return interval(1000);
  }


  go() {
    let ob = this.createObservable();

    ob = ob.pipe(
      map(val => val * val), 
      take(10), 
      skip(3), 
      filter(val => val % 2 === 0)
    );

    ob.subscribe({
      next: val => console.log(val), 
      complete: () => console.log('completed'), 
      error: err => console.log('Error ' + err)
    });

  }
}
