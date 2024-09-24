// Exercise 06 
class Car { // creating car class
    constructor(model, year) { // creating a constractor that takes model and year
      this.model = model;
      this.year = year;
    }
  
    details() { // creating a details method that displays the details
        return `Model: ${this.model} Engine ${this.year}`; // returning the details with template syntax
    }
  }
  
class Sedan extends Car { // creating sedan which is subclass of car 
    constructor(model, year, balance) { // constructor for sedan that extends from car
      super(model, year); // super function to extend
      this.balance = balance; // this initilization
    }
  
    info() { // info method that display info for sedan
        return `${this.model} has a balance of $${this.balance.toFixed(2)}`; // returning the data
    }
}
  
const car2 = new Car('Pontiac Firebird', 1976); // initializing a  car
console.log(`Car details: ${car2.details()}`); // dislaying details as on paper
  
const sedan = new Sedan('Volvo SD', 2018, 30000); // initializing a sedan
console.log(`Sedan info: ${sedan.info()}`); // displaying data for sedan
  

