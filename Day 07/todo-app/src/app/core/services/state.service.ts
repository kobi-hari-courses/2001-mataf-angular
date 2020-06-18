import { Injectable } from '@angular/core';
import { TodoList } from '../models/todo-list.model';
import { TodoItem } from '../models/todo-item.mode';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class StateService {
  private lists: TodoList[] = [
    {
      id: 1, 
      caption:'Shopping', 
      description: 'Things to buy on our next stop to the supermarket', 
      icon: 'shopping_cart',
      color: 'blue'
    }, 
    {
      id: 2, 
      caption:' Work', 
      description: 'Work related action items, development, design, and implementation', 
      icon: 'work',
      color: 'green'
    }
  ];

  private items: TodoItem[] = [
    {
      id: 3, 
      caption: 'Tomatos', 
      isCompleted: false, 
      listId: 1
    }, 
    {
      id: 4, 
      caption: 'Sugar', 
      isCompleted: true, 
      listId: 1
    }, 
    {
      id: 5, 
      caption: 'Milk', 
      isCompleted: false, 
      listId: 1
    }, 
  ];

  private runningId: number = 6;
  private lists$ = new BehaviorSubject<TodoList[]>(this.lists);
  private items$ = new BehaviorSubject<TodoItem[]>(this.items);

  getAllLists(): Observable<TodoList[]> {
    return this.lists$.asObservable();
  }

  getAllItems(): Observable<TodoItem[]> {
    return this.items$.asObservable();
  }

  getItemsInList(listId: number): Observable<TodoItem[]> {
    return this.items$.pipe(
      map(items => items.filter(item => item.listId === listId))
    );
  }

  getActiveItems(): Observable<TodoItem[]> {
    return this.items$.pipe(
      map(items => items.filter(item => item.isCompleted === false))
    );
  }

  getTodoList(listId: number): Observable<TodoList> {
    return this.lists$.pipe(
      map(lists => lists.find(l => l.id === listId))
    );
  }

  getTodoItem(itemId: number): Observable<TodoItem> {
    return this.items$.pipe(
      map(items => items.find(i => i.id === itemId)), 
    );
  }

  private notifyLists() {
    this.lists$.next(this.lists);
  }

  private notifyItems() {
    this.items$.next(this.items);
  }


  async addList(caption: string, description: string, color: string, icon: string): Promise<number> {
    const list: TodoList = {
      id: ++this.runningId, 
      caption,  
      description,  
      color, 
      icon
    }
    
    // this.lists.push(list); // nu nu nu
    this.lists = [...this.lists, list];
    this.notifyLists();
    return list.id;
  }

  async addItem(listId: number, caption: string): Promise<number> {
    const item: TodoItem = {
      id: ++this.runningId, 
      caption, 
      listId, 
      isCompleted: false
    }

    this.items = [...this.items, item];
    this.notifyItems();
    return item.id;
  }

  async modifyList(list: TodoList) {
    this.lists = this.lists.map(l => (l.id !== list.id) ? l : {...list});
    this.notifyLists();
  }

  async deleteList(listId: number) {
    this.lists = this.lists.filter(l => l.id !== listId);
    this.items = this.items.filter(i => i.listId !== listId);
    this.notifyLists();
    this.notifyItems();
  }

  async markAsCompleted(itemId: number) {
    this.items = this.items.map(i => (i.id !== itemId) ? i : {...i, isCompleted: true});
    this.notifyItems();
  }

  
}
