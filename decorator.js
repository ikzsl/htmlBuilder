class Car {
  constructor() {
    this.price = 1000;
    this.model = 'Car';
  }

  getPrice() {
    return this.price;
  }

  getDescription() {
    return this.model;
  }
}



class Autopilot {
  constructor(car) {
    this.car = car;
  }

  getPrice() {
    return this.car.getPrice() + 5000;
  }

  getDescription() {
    return `${this.car.getDescription()} with autopilot`;
  }
}


let tesla = new Car();
tesla = new Autopilot(tesla);

console.log("TCL: tesla", tesla.getDescription(), tesla.getPrice())


