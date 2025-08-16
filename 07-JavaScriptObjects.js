//JavaScript Objects 
const car = {
    name: "BMW",
    model: 500,
    weight: "850kg",
    color: "white",
    start: function () {
      console.log("Car has started");
    },
    drive: function () {
      console.log("Car is driving.");
    },
    brack: function () {
      console.log("The car is bracket.");
    },
    stop: function () {
      console.log("The car is stop.");
    },
    fullName: function () {
      return this.name + " " + this.model;
    },
};

const parson = {
    fastName: "Sahin",
    lastName: "Enam",
    age: 17,
    home: "Bhola",
    fullName: function () {
      return this.fastName + " " + this.lastName;
    },
};

console.log(car.weight);
console.log(car.color);
console.log(car['model']);
car.start();
car.brack();
car.stop();
console.log(car.fullName());

console.log(parson.fullName());
