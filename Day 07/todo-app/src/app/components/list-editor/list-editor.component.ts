import { CoreValidators } from './../../core/validators/core-validators';
import { StateService } from 'src/app/core/services/state.service';
import { Observable, Subscription } from 'rxjs';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { TodoList } from 'src/app/core/models/todo-list.model';
import { ActivatedRoute, Router } from '@angular/router';
import { map, switchMap } from 'rxjs/operators';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-list-editor',
  templateUrl: './list-editor.component.html',
  styleUrls: ['./list-editor.component.css']
})
export class ListEditorComponent implements OnInit, OnDestroy {
  list$: Observable<TodoList>;
  form: FormGroup;
  sub: Subscription;

  icons = [
    'shopping_cart', 
    'stars', 
    'today', 
    'work', 
    'call', 
    'flag'    
  ];

  colors = [
    'red', 
    'blue', 
    'green', 
    'steelblue', 
    'magenta', 
    'brown', 
    'orange'
  ];


  constructor(
    private state:StateService, 
    private route: ActivatedRoute, 
    private fb: FormBuilder, 
    private router: Router
  ) { }

  ngOnInit(): void {
    this.buildForm();
    const listId$ = this.route.params.pipe(
      map(prms => Number(prms['id']))
    );

    this.list$ = listId$.pipe(
      switchMap(id => this.state.getTodoList(id))      
    );

    
    this.sub = this.list$.subscribe(list => {
      if (list) {
        this.form.reset(list);
      } else {
        this.form.reset({
          id: -1, 
          caption: '', 
          description: '', 
          color: '', 
          icon: ''
        });
      }
    })
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }


  buildForm() {
    this.form = this.fb.group({
      id: [-1], 
      caption: ['', Validators.required], 
      description: ['', CoreValidators.counters(20, 4)], 
      icon: ['', Validators.required], 
      color: ['', Validators.required]
    });
  }

  async save() {
    const list = <TodoList>this.form.value;
    let id = list.id;

    if (id === -1) {
      id = await this.state.addList(list.caption, list.description, list.color, list.icon);
    } else {
      await this.state.modifyList(list);
    }

    this.router.navigate(['lists', id]);
  }

}
