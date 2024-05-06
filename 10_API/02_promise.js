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
    // console.log(email);
})
.catch(function(err){
    // console.log(err);
})
.finally(()=>{
    // console.log("Finally run either it is rejected nor resolve");
})

const promiseFour = new Promise(function (resolve, reject) {
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

async function handle(){
    try{
        let data = await promiseFour
        console.log(data.username);
    }
    catch(err){
        console.log(err);
    }
}
// handle()


async function fetchApi(){
    try {
        let fetchData = await fetch('https://jsonplaceholder.typicode.com/posts')
        // console.log(fetchData);
        let data = await fetchData.json()
        console.log(data);
    } catch (error) {
        console.log(error);
    }
}

// fetchApi()

const data = new Promise(async(resolve, reject)=> {
    let fetchData = await fetch('https://jsonplaceholder.typicode.com/posts')
    // console.log(fetchData);
    resolve(fetchData)
}).then(async(apidata)=>{
    let dataget = await apidata.json();
    // console.log(dataget);
}).catch((err)=>{
    // console.log(err);
})

// console.log(data);

fetch('https://jsonplaceholder.typicode.com/posts')
.then((response)=>{
    return response.json()
})
.then((data)=>{
    console.log(data);
})
.catch((err)=>{
    console.log(err);
})