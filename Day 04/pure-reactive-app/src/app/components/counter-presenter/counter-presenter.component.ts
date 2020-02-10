import { CounterService } from './../../services/counter.service';
import { Component, OnInit, OnDestroy, ChangeDetectionStrategy } from '@angular/core';
import { Subscription, Observable } from 'rxjs';

@Component({
  selector: 'app-counter-presenter',
  templateUrl: './counter-presenter.component.html',
  styleUrls: ['./counter-presenter.component.css'], 
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class CounterPresenterComponent implements OnInit {
  value$: Observable<number>;
  sub: Subscription;


  constructor(
    private counterService: CounterService
  ) { }

  ngOnInit() {
    this.value$ = this.counterService.getValue();
  }
}
