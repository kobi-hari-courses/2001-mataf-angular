import { AbstractAdditionService } from './abstract-addition-service';

export class AdditionWrongService {
    private id: number = 0;

    constructor() {
        this.id = Math.ceil(Math.random() * 10000);
        console.log('Addition Wrong Service Created with id ' + this.id);
    }

    getId(): number {
        return this.id;
    }

    add(op1: number, op2: number): number {
        return op1 + op2 + 1;
    }
}