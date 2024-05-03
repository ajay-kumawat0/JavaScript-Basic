const clock = document.querySelector('#clock');

const date = new Date().toLocaleTimeString();
console.log(date);

setInterval( ()=>{
    clock.innerHTML = new Date().toLocaleString();
},100)