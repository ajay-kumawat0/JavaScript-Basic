// ************* NUMBER **************************

// const no = 20;  // here we can give number or also string value
// console.log(no);

// const score = new Number(300);  // here always in number value give
// console.log(score);

// const scoreString = score.toString() // to convert number to string
// console.log(scoreString); 
// console.log(typeof scoreString);
// console.log(scoreString.length);

// console.log(score.toFixed(2)); // Number of digits after the decimal point. Must be in the range 0 - 20, inclusive.

// const preNumber = 536.14873;
// console.log(preNumber.toPrecision(3)); // it is used to precise the value like round according to given argument

// const bigNumber = 10000000;
// // console.log(bigNumber);
// console.log(bigNumber.toLocaleString()); // it convert into US style for read numbers
// console.log(bigNumber.toLocaleString('en-IN')); // it convert INDIAN ways to read an numbers



// ************* MATHS **************************
// console.log(Math); // it is onetype of object and it holds methods
// console.log(Math.abs(-9));
// console.log(Math.round(2.9));
// console.log(Math.ceil(2.3));
// console.log(Math.floor(2.9));
// console.log(Math.min(2,6,43,87));
// console.log(Math.max(2,9,2,54,6));

// console.log(Math.random()); // always return 0 - 1 value
// console.log((Math.random()*10)+1); // always return value between 1-10
// console.log(Math.floor((Math.random()*10))+1); // print lowest value

const min = 10;
const max = 20;
console.log(Math.floor(Math.random() * (max - min + 1)) + min); // print number between min(10) and max(20) value