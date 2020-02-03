import { AdditionService } from './../../services/addition.service';
import { Component } from '@angular/core';
import { AbstractAdditionService } from 'src/app/services/abstract-addition-service';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css'], 
  providers: []
})
export class CalculatorComponent  {
  result: number;
  serviceId: number;

  constructor(
    private addition: AbstractAdditionService
    ) 
    {
      this.serviceId = addition.getId();
    }

  calculate(a: string, b: string) {
    let op1 = Number(a);
    let op2 = Number(b);
    this.result = this.addition.add(op1, op2);
  }

}
