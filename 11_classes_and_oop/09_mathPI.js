// console.log(Math.PI);
Math.PI = 8
// console.log(Math.PI);

const piValue =  Object.getOwnPropertyDescriptor(Math, "PI");
// console.log(piValue.writable = true);
// console.log(piValue.value = 5);


Math.PI = 87943
// console.log(Math.PI);


const user = {
    name : "Ram",
    age : 20,
    email : "ram@gmail.com", 
    getFunction : function(){
        console.log("inner Function");
    }
}
console.log(user);

// const userDes = Object.getOwnPropertyDescriptor(user, "name")
// console.log(userDes);

// Object.defineProperty(objectName, proprtyName, {write here what you want to change})

Object.defineProperty(user, "name",{
    // writable : false,
    enumerable : false,
    // configurable : false
})


const userDes = Object.getOwnPropertyDescriptor(user, "name")
// console.log(userDes);

// for (const [key, value] of user) {
//     console.log(`${key} : ${value}`);
// }

for (const [key, value] of Object.entries(user)) { // Object.entries(user)=> it allow to iterate an object
    if (typeof value !== 'function') {
        console.log(`${key} : ${value}`);
    }
}