#! /usr/bin/env node
class Car {
    make;
    model;
    year;
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    getMake() {
        return this.make;
    }
    setMake(make) {
        this.make = make;
    }
    getModel() {
        return this.model;
    }
    setModel(model) {
        this.model = model;
    }
    getYear() {
        return this.year;
    }
    setYear(year) {
        this.year = year;
    }
}
const myCar = new Car("Toyota", "Corolla", 2020);
console.log(myCar.getMake());
console.log(myCar.getModel());
console.log(myCar.getYear());
myCar.setMake("Honda");
myCar.setModel("Civic");
myCar.setYear(2022);
console.log(myCar.getMake());
console.log(myCar.getModel());
console.log(myCar.getYear());
export {};
