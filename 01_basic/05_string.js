// const name = "Raj";
// const age = 20;

// console.log(name+age); // it is a older way to print.

// console.log(`My name is ${name} and i'm ${age} older`); // it is better way to use or show output.

// const bikeName = new String('xtream-ram');
// // console.log(bikeName[0]);
// // console.log(bikeName.__proto__);    // check string method for using this.

// console.log(bikeName.length); // check char length
// console.log(bikeName.toUpperCase());  // char are in upper case
// console.log(bikeName.charAt(4));    // check position to char 
// console.log(bikeName.indexOf('m'));    // check char position with char 


// ******************   SUBSTRING   ********************************

// const newString = bikeName.substring(-10,3);  // 0 => start position // 5 => end position but last one is not include
// console.log(`Substring ${newString}`);


// ******************   SLICE   ********************************

// const anotherString = bikeName.slice(0,5)
// console.log(`Slice ${anotherString}`);

// const anotherString = bikeName.slice(-3);    // it is start from last char of string // it is used to print the value from to end
// console.log(`Slice in negative ${anotherString}`);

// const anotherString = bikeName.slice(3, -2);    // it is start from last char of string // it is used to print the value from to end
// console.log(`Slice in negative ${anotherString}`);


// ******************   TRIM   ********************************

// const trimString = '   Ram   ';
// console.log(trimString);
// console.log(trimString.trim());

// ******************   REPLACE   ********************************
// const replaceString = 'https://ajay%20kumawat.com'
// console.log(replaceString);
// console.log(replaceString.replace('%20', '-')); // Replace the string
// console.log(replaceString.includes('ajay')); // it is check the string is available or not // it return true if available otherwise false


// ******************   REPLACE   ********************************
// const splitString = 'raj-ram-shyam'
// console.log(splitString.split('-'));
// const splitString = 'raj&ram&shyam'
// console.log(splitString.split('&'));