import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TodoList } from 'src/app/core/models/todo-list.model';
import { StateService } from 'src/app/core/services/state.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.css']
})
export class ListsComponent implements OnInit {
  lists$: Observable<TodoList[]>;

  constructor(
    private state: StateService, 
    private router: Router
  ) { }

  ngOnInit(): void {
    this.lists$ = this.state.getAllLists();
  }

  navigateToList(id: number) {
    this.router.navigate(['lists', id]);
  }

  navigateToNew() {
    this.router.navigate(['lists', -1, 'edit']);
  }
}
