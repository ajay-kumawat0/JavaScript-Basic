class Admin {
    constructor(adminName) {
        this.adminName = adminName;
    }

    show(){
        // console.log(this.adminName);
        return this.adminName
    }
}
class User extends Admin { // step(2) reference the class extends with user class
    constructor(name, email, password) {
        super(name);    // super keyboard is checked the varible in extend class and than print. Step(1)
        this.email = email;
        this.password = password;
    }

    addBlog(){
        console.log("This is our blog");
    }
}

const u1 = new User("ram", "ram@gmail.com", 123);
// console.log(u1);
console.log(u1.show());

const ad = new Admin("Raj");
console.log(ad.adminName);

// console.log(u1 instanceof User); // true
// console.log(u1 instanceof Admin); // true
// console.log(ad instanceof Admin); // true