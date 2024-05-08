class user {
    constructor(name, age, email, password){      //it is automatically call when a object created
        this.name = name;
        this.age = age;
        this.email = email;
        this.password = password;
    }

    getPassword(){
        return `${this.password}zsdsdjnh`
    }
}

// const userOne = new user('ram', 20, 'ram@gmail.com', 123);
// console.log(userOne.getPassword());

// Behind the scene OR other way to write this code

function user(name, age, email, password){
    this.name = name;
    this.age = age;
    this.email = email;
    this.password = password;
}

user.prototype.getPassword = function(){
    return `${this.password}zsdsdjnh`
}


const userOne = new user('ram', 20, 'ram@gmail.com', 123);

// console.log(userOne.getPassword());