class Admin {
    constructor(adminName) {
        this.adminName = adminName;
    }

    show() {
        return `Admin name is ${this.adminName}`;
    }

    static adminId() {  // static is help to not access in extends class
        return `Admin id is 2121`;
    }
}

class raj extends Admin{
    constructor(adminName){
        super(adminName)
    }

    getName(){
        return this.adminName;
    }
}

// const ad = new Admin("Ram");
// console.log(ad.show());


const raj1 = new raj("Ram");
console.log(raj1.show());
// console.log(raj1.adminId());