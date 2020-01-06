var Calculator = /** @class */ (function () {
    function Calculator(a, b) {
        this.a = a;
        this.b = b;
    }
    Calculator.prototype.add = function () {
        return this.a + this.b;
    };
    return Calculator;
}());
var c = new Calculator(5, 10);
console.log(c.add());
//# sourceMappingURL=main.js.map