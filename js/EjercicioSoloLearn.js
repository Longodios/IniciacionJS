class Contact {
    constructor(name, number) {
        this.name = name;
        this.number = number;
    }
    print() {
        return `${this.name}: ${this.number}`
    };
}



var a = new Contact("David", 12345);
var b = new Contact("Amy", 987654321);


console.log(a.print());
console.log(b.print());