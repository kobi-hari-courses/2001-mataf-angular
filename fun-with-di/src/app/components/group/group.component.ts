import { AdditionService } from './../../services/addition.service';
import { Component, OnInit } from '@angular/core';
import { AbstractAdditionService } from 'src/app/services/abstract-addition-service';

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.css'], 
  providers: [{
    provide: AbstractAdditionService, 
    useClass: AdditionService
  }]
})
export class GroupComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
