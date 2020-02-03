import { AuditService } from './audit.service';
import { AbstractAdditionService } from './abstract-addition-service';
import { Injectable } from '@angular/core';

@Injectable()
export class AdditionService extends AbstractAdditionService{
    private id: number = 0;

    constructor(
        private audit: AuditService
    ) {
        super();
        this.id = Math.ceil(Math.random() * 10000);
        console.log('Addition Service Created with id ' + this.id);
    }

    getId(): number {
        return this.id;
    }

    add(op1: number, op2: number): number {
        this.audit.log(`${op1} + ${op2}`);
        return op1 + op2;
    }
}