import { CounterService } from './../../services/counter.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription, Observable } from 'rxjs';

@Component({
  selector: 'app-counter-reader',
  templateUrl: './counter-reader.component.html',
  styleUrls: ['./counter-reader.component.css']
})
export class CounterReaderComponent implements OnInit {
  value$: Observable<number>;

  constructor(private counter: CounterService) { }

  ngOnInit() {
    this.value$= this.counter.getValue();
  }

}
