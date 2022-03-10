// Operators
  //Arithmetic Operators
  //Comparison Operators
  //Logical Operators
  //Assignment Operators
  //Ternary Operators


//

/*const x = 5;
const y = 50;
let result = 0;

//Addition
result = x + y;
console.log(result);  

// subtraction

result= x-y;
console.log(result); 

// Multiplication
result= x*y;
console.log(result); 

// Division
result= x/y;
console.log(result); 


//Exponent
result= y ** x;
console.log(result); 


//Modular (%) [remainder]

result= y % x;
console.log(result); 

// Increment and Decrement Oprator

result++;
console.log(result); 

result--;
console.log(result); 

// comparision operators [==> true/false]

console.log(x > y); 
console.log(x < y); 
console.log(x >= y); 
console.log(x <= y); 

console.log(x == y); 
console.log(x != y);

//strict equality 
console.log(x === y);
//strict inequality (check value and data type)
console.log(x !== y);

console.log(2 === 2);
console.log("Hello" === "Hello");
console.log("2" === 2);
console.log("2" == 2);// loose equality doest not content data type

// The good ones: ===, !==
//The Evil ones: ==, !=

console.log("" == 0);// here loose equality
console.log("" === 0);

console.log("0" == false);
console.log("0" === false);

console.log(1 == true); 



// Logical Operators
//AND && ==> All oprant are true ==> True
console.log(false && true && true);
console.log(false && true);
console.log(false && false);

//OR || ==>
console.log(false || true);
console.log(true || true);
console.log(false || false);

// NOT
console.log(!false);
console.log(!true);

// Assignment Operator (=, ==)
let num = 3;
num += 3; // num = num + 3;
num -= 3;
num *= 3;
num /= 3;
console.log(num);

// assign happen in string also
let string = 'Hello';
string += ' i am Mimi';
console.log(string);



// Logic statement
// If statement
const age = 11;

if(age > 18) {
  console.log("You May Enter");
} else if (age === 18) {
  console.log("You just turned 18");
} else {
  console.log("Grow Up");
}


//Truedy , Falsy use in if statement condition 

if ("ok") {
  console.log("In Here");
} else {
  console.log("No, We are in here");
}

//Falsy values ==> only 6 fasly value (false, 0, '', null, undefined, NaN)
// any values is trudy values
const dogs = 5;
if (dogs >0) {
  console.log(`I have ${dogs} dogos`);
} else {
  console.log("No, We are in here");
}


//Switch statement

const SuperHero = 'Iron man';

switch(SuperHero){
    case 'Iron man':
      console.log("I am Iron man...");
      break;
    case 'Thor':
      console.log("I am Thor");
    
}

*/

 //Ternary Operators

 //condition ? block of code : block of code

 const age =18;
 if (age > 18){
   console.log("You can drive");
 }else{
    console.log("You can not drive yet");
 }
// how do you write if else statemet in Ternary operator 
 age > 18 ? console.log("You can drive") : console.log("You can not drive yet") 
