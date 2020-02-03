import { Component } from '@angular/core';
import { Observable, interval, Observer, Subject, BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isShowingReader: boolean = true;

  toggleReader() {
    this.isShowingReader = !this.isShowingReader;
  }

  createIntervalObservable(): Observable<number> {
    return interval(1000);
  }

  createCustomObservable(): Observable<number> {
    let o = new Observable<number>(observer => {
      observer.next(42);
      setTimeout(() => observer.next(21), 1000);
      setTimeout(() => observer.next(50), 3000);
      setTimeout(() => observer.next(60), 7000);
      setTimeout(() => observer.next(11), 9000);
      setTimeout(() => observer.complete(), 10000);
    });

    return o;
  }

  createSubject(): Observable<number> {
    let s = new Subject<number>();

    s.next(42);
    setTimeout(() => s.next(21), 1000);
    setTimeout(() => s.next(50), 3000);
    setTimeout(() => s.next(60), 7000);
    setTimeout(() => s.next(11), 9000);
    setTimeout(() => s.complete(), 10000);

    return s;
  }

  createBehaviorSubject(): Observable<number> {
    let s = new BehaviorSubject<number>(42);

    setTimeout(() => s.next(21), 1000);
    setTimeout(() => s.next(50), 3000);
    setTimeout(() => s.next(60), 7000);
    setTimeout(() => s.next(11), 9000);
    setTimeout(() => s.complete(), 10000);

    return s;
  }


  go() {
    let observable1 = this.createBehaviorSubject();
    let observer1 : Observer<number> =
    {
        next(value: number) {console.log('Observer 1, next ' + value)},
        error(err) {console.log('observer 1 Error')}, 
        complete() {console.log('Observer 1 Completed')}
    } 

    let observer2 : Observer<number> =
    {
        next(value: number) {console.log('Observer 2, next ' + value)},
        error(err) {console.log('observer 2 Error')}, 
        complete() {console.log('Observer 2 Completed')}
    } 
    observable1.subscribe(observer1);

    setTimeout(()=> {
      observable1.subscribe(observer2);
    }, 2500);

  }
}
