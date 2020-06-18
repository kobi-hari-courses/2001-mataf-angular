import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo-item-presenter',
  templateUrl: './todo-item-presenter.component.html',
  styleUrls: ['./todo-item-presenter.component.css']
})
export class TodoItemPresenterComponent {
  @Input()
  caption: string;

  @Input()
  isCompleted: string;

  @Output()
  completed = new EventEmitter<void>();

  complete() {
    if (!this.isCompleted) {
      this.completed.emit();
    }
  }
}
