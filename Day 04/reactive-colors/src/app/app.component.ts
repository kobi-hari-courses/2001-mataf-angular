import { ColorsService } from './services/colors.service';
import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable, merge } from 'rxjs';
import { ColorModel } from './models/color.model';
import { map, mergeMap, debounceTime, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  search$ = new BehaviorSubject<string>('');
  colors$: Observable<ColorModel[]>;
  isBusy$: Observable<boolean>;

  constructor(private colorsService: ColorsService ) {}

  ngOnInit(): void {
    this.colors$ = this.search$.pipe(
      debounceTime(500), 
      switchMap(keyword => this.colorsService.search(keyword))
    );

    const busyTrue$ = this.search$.pipe(
      map(_ => true)
    );

    const busyFalse$ = this.colors$.pipe(
      map(_ => false)
    );

    this.isBusy$ = merge(busyTrue$, busyFalse$);
  }

  onInput(value: string) {
    this.search$.next(value);
  }


}
