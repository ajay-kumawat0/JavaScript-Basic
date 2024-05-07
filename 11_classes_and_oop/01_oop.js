const car = {
    name : 'BMW',
    price : 297001,
    isAvailable : true,
    getCarDetail : function(){
        // console.log("Car Details are here");
        console.log(this); // hold current context value
        console.log(`Car price :- ${this.price}`);
    }
}

// console.log(car.name);
// console.log(car.getCarDetail());


// ************* Constructor Function **********************

// 1) create an empty object its called instence, 
// 2) after that constructor function call due to "new" keyword
// 3) Inject all arguments in "new" keyboard
// 4) Show all object in this step
// new => it is constructor function
// new => it is help to make new context

// const promise = new Promise()
// const obj = new Date()



function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);

    }

    return this
}

const userOne = new User("ram", 7, true)
const userTwo = new User("raj", 5, false)
console.log(userOne.constructor);
//console.log(userTwo);