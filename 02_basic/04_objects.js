// const obj = new Object();
const obj = {};

obj.name = "Raj";
obj.age = 20;
obj.email = "raj@google.com"

// console.log(obj);

const obj1 = {
    name: 'ram',
    obj2: {
        age: 20,
        obj3: {
            email: "raj@gmail.com"
        }
    }
}

// console.log(obj1);


const ob1 = { 1: 'a', 2: 'b' }
const ob2 = { 3: 'a', 4: 'b' }
const ob3 = { ob1, ob2 }
// console.log(ob3);

const ob4 = Object.assign(ob1, ob2); // this is used to concate the two object
const ob5 = { ...ob1, ...ob2 }
// console.log(ob5);

// console.log(obj);
// console.log(Object.keys(obj));
// console.log(Object.values(obj));
// console.log(Object.entries(obj));

const users = {
    name : "Raj",
    age : 20,
    email : "raj@google.com"
}

// console.log(users.name);
const {name} = users; // destructing
const {name : username} = users; // destructing and also change name for calling