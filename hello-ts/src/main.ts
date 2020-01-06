class Calculator {
    constructor(
        private a: number, 
        private b: number
        ){}

    add(): number {
        return this.a + this.b;
    }
}

let c = new Calculator(5, 10);
console.log(c.add());