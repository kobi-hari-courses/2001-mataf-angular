import { CoreValidators } from './../../core/validators/core-validators';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TodoList } from 'src/app/core/models/todo-list.model';
import { TodoItem } from 'src/app/core/models/todo-item.mode';
import { StateService } from 'src/app/core/services/state.service';
import { ActivatedRoute, Router } from '@angular/router';
import { map, switchMap } from 'rxjs/operators';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-list-viewer',
  templateUrl: './list-viewer.component.html',
  styleUrls: ['./list-viewer.component.css']
})
export class ListViewerComponent implements OnInit {
  listId$: Observable<number>;
  list$: Observable<TodoList>;
  items$: Observable<TodoItem[]>;

  isConfirmingDelete: boolean = false;
  newLine = new FormControl('', CoreValidators.counters(6, 1));


  constructor(
    private state: StateService, 
    private route: ActivatedRoute, 
    private router: Router
  ) { }

  ngOnInit(): void {
    this.listId$ = this.route.params.pipe(
      map(prms => Number(prms['id']))
    );

    this.list$ = this.listId$.pipe(
      switchMap(id => this.state.getTodoList(id))
    );

    this.items$ = this.listId$.pipe(
      switchMap(id => this.state.getItemsInList(id))
    );
  }

  confirmDelete() {
    this.isConfirmingDelete = true;
  }

  cancelDelete() {
    this.isConfirmingDelete = false;
  }

  async deleteList() {
    let id = Number(this.route.snapshot.params['id']);
    await this.state.deleteList(id);
    this.router.navigate(['lists']);
  }

  async editList() {
    let id = Number(this.route.snapshot.params['id']);
    this.router.navigate(['lists', id, 'edit']);
  }

  async createNewList() {
    this.router.navigate(['lists', -1, 'edit']);
  }

  async markAsCompleted(itemId: number) {
    await this.state.markAsCompleted(itemId);
  }

  async addItem() {
    let id = Number(this.route.snapshot.params['id']);
    let txt = this.newLine.value;
    await this.state.addItem(id, txt);
    this.newLine.reset('');
  }

}
