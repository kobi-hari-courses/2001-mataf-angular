function Person() {
    this.firstName = 'John';
    this.lastName = 'Smith';
    this.log = function () {
        console.log(this.firstName);
        console.log(this.lastName);
    }
}

var p = new Person();

var theRealLog = p.log.bind(p);
setTimeout(theRealLog, 2000);
