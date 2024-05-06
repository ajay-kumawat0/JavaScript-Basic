const promiseOne = new Promise((res, rej) => {
    setTimeout(function () {
        // console.log('Promise task One');
        res();
    }, 1000)
})

promiseOne.then(function () {
    // console.log('Promise task One completed....!');
})

new Promise((res, rej) => {
    setTimeout(() => {
        // console.log('Promise Two');
        res()
    }, 1000)
}).then(() => {
    // console.log('Promise two complete');
})

const promiseTwo = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve({ name: "Ram" })
    }, 1000)
})

promiseTwo.then(function (userName) {
    // console.log(userName);
})

const promiseThree = new Promise(function (resolve, reject) {
    setTimeout(function () {
        const age = 20;
        if (age) {
            resolve({ username: "Ram", email: "ram@gmail.com" })
        }
        else {
            reject("Something wrong")
        }
    }, 1000)
})
.then(function (data) {
    // console.log(data);
    return data.email
})
.then((email)=>{
    console.log(email);
})
.catch(function(err){
    console.log(err);
})
.finally(()=>{
    console.log("Finally run either it is rejected nor resolve");
})