function userName(name){
    // console.log('hiiii');
    this.name = name
}
// console.log(userName("Ram"));

function getName(name, age, email){
    // this.name = name;
    userName.call(this, name); // this=> it is used to "this" context  
    this.age = age;
    this.email = email
}

console.log(new getName("Ram", 20, "ram@gmail.com"));