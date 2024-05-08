// let myName = "ram     "
// let mychannel = "raj     "

// console.log(myName.trueLength);


let myHeros = ["thor", "spiderman"]


let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.ram = function(){
    console.log(`ram is present in all objects`);
}

Array.prototype.heyram = function(){
    console.log(`ram says hello`);
}

// heroPower.ram()
// myHeros.ram()
// myHeros.heyram()
// heroPower.heyram()

// inheritance

const User = {
    name: "raj",
    email: "raj@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User

// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUsername = "rajAurCode     "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength()
"ram".trueLength()
"iceTea".trueLength()