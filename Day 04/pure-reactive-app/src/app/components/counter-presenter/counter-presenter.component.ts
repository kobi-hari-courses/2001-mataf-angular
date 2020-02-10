import { CounterService } from './../../services/counter.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-counter-presenter',
  templateUrl: './counter-presenter.component.html',
  styleUrls: ['./counter-presenter.component.css']
})
export class CounterPresenterComponent implements OnInit, OnDestroy {
  value: number;
  sub: Subscription;


  constructor(
    private counterService: CounterService
  ) { }

  ngOnInit() {
    this.sub = this.counterService.getValue().subscribe(val => {
      this.value = val;
    })
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

}
