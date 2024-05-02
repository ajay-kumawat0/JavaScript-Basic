const profile = {
    name : "Ram",
    age : 20,
    email : "ram@gmail.com",
    isAvai : true
}

// console.log(profile.name);
// console.log(profile['email']);

profile.email = "ram@google.com";
// console.log(profile.email);

// Object.freeze(profile);
profile.email = "ram@yahoo.com";
// console.log(profile);

profile.fun = function(){
    console.log("This is function");
}

// console.log(profile.fun());