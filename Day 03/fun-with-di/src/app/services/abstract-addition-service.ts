export abstract class AbstractAdditionService {
    abstract getId(): number;
    abstract add(op1: number, op2: number): number;
}