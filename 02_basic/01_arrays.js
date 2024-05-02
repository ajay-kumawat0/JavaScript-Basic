const arr = [1,7,3,9,8,4,7]
// console.log(arr[4]);

// arr.push(3); //add an elment at end of array
// console.log(arr);

// arr.pop() //remove an elment at end of array
// console.log(arr);

// arr.unshift(8) //add an elment at starting of array
// console.log(arr);

// arr.shift() //remove an elment at starting of array
// console.log(arr);

// console.log(arr.includes(8)); // it print boolean number

// console.log(arr.indexOf(9)); // it check value in which position

// const newArr = arr.join() // it join an array and also convert in string format
// console.log(arr);
// console.log(newArr);
// console.log(typeof newArr);


//******************* Slice and Splice ********************/
console.log(arr);
const newArr = arr.slice(1,3); // it does not modify the original array
console.log("After slice" ,arr);
console.log(newArr);

const newArr2 = arr.splice(1,3) // it does modify the original array
console.log("After splice" ,arr);
console.log(newArr2);