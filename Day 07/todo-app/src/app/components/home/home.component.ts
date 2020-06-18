import { Router } from '@angular/router';
import { StateService } from './../../core/services/state.service';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { map, startWith } from 'rxjs/operators';
import { until } from 'protractor';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  today = Date.now();
  developer = 'Kobi Hari';
  application = 'Todos App';

  itemsCount$: Observable<number>;
  listsCount$: Observable<number>;
  uncompletedCount$: Observable<number>;

  constructor(
    private state: StateService, 
    private router: Router
  ) { }

  ngOnInit(): void {
    this.itemsCount$ = this.state.getAllItems().pipe(map(items => items.length));
    this.listsCount$ = this.state.getAllLists().pipe(map(lists => lists.length));
    this.uncompletedCount$ = this.state.getActiveItems().pipe(map(items => items.length));
  }

  navigateToNew() {
    this.router.navigate(['lists', -1, 'edit']);
  }

  navigateToLists() {
    this.router.navigate(['lists']);
  }

  navigateToItems() {
    this.router.navigate(['items']);
  }

}
