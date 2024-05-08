const User = {
    _email: 'ram.com',
    _password: 123,


    get email(){
        return this._email.toUpperCase()
    },

    set email(value){
        this._email = value
    }
}

const ob = Object.create(User)
console.log(ob.email);