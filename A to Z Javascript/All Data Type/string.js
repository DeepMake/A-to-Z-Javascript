// String

//sigle quotes - simple string
var single_qoute = 'Hello Javascript i am single qoute'
console.log(single_qoute)

// double qoutes - simple string (there is no differnce in single and double qoute string)
let double_qoute = "Hello Javascript i am double qoute"
console.log(double_qoute)

/* backticks - complex string 
  backtrick provides extended functionality
  it is allow us to embed variable and expression into a string
  by wrapping them into $ and then {} - ${} 
*/
const name = `Jane`;
const backtricks = `Hello, ${name}`;
console.log(backtricks)

const newo = `2 + 2`;// 2+2 treat as a string
console.log(newo)

const newz = `${2 + 2}`; // here 2+2 treat as a number 
console.log(newz)
