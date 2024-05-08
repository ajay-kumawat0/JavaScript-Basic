class User{
    constructor(name, email, password){
        this.name = name,
        this.email = email
        this.password = password
    }

    get email(){
        return `Me nhi btaunga`
    }

    set email(email){
        this._email = email
    }

    get password(){ // getter => it is used to get value from object
        return `${this.newPassword}@1a2b3c` // show this rewrite password to all users
    }

    set password(pass){  // seter => it help to set the value of variable
        this.newPassword = pass // store original password
    }
}

const u1 = new User("ram", "ram@gmail.com", 'ram')
console.log(u1.email);