/*Assignment 1: Array Operations*/
let fruits = ["apple","banana","orange"];
fruits.splice(0,1);
fruits.push('grape');
fruits[1]='pear';
console.log(fruits);

/*Assignment 2: Object Operations*/
let person= [];
person.name = 'John';
person.age = 30;
person.city = 'New York';
delete person.age;
person.job = 'Engineer';
person.city = 'San Francisco';
console.log(person);

/*Assignment 3: Array of Objects Operations*/
let cars = [];
//console.log(typeof cars);
cars.make = 'Toyota';
cars.model = 'Camry';
cars.year = 2018;
delete cars.make;
cars.make = 'Honda';
cars.model = 'Civic';
cars.year = 2020;
cars.model = 'Accord';
console.log(cars);
