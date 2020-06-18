import { StateService } from 'src/app/core/services/state.service';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { TodoItem } from 'src/app/core/models/todo-item.mode';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {
  items$: Observable<TodoItem[]>

  constructor(
    private state: StateService
  ) { }

  ngOnInit(): void {
    this.items$ = this.state.getActiveItems();
  }

  async complete(itemId) {
    await this.state.markAsCompleted(itemId);
  }

}
