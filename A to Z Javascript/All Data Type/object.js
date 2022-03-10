// all data type can content one value at a time, but object can store collection of data and more complex entity
//

const name = 'Mimi';
const age = 20;

const person = {
  name: 'Mimi',
  age: 20,
}
console.log(person);

//Dot notation
console.log(person.name);
console.log(person.age);

// they are many other kinds of object in javascript

//1. Arrary

const arr = [1, 2, 3, 4]
console.log(arr);
console.log(typeof arr);

// date

const date = new Date();
console.log(date);
console.log(typeof date);

// There are 2 type of programming language
//1. statically typed (each variable is already know at compile time like c,c++,java)
  // int i= 0 // have to delare the datatype 

//2. dymanically typed (variable can receive diffrent data type over time like java script)

let i= 'hello';
console.log(typeof i);

i= 5;
console.log(typeof i);

i= true;
console.log(typeof i);