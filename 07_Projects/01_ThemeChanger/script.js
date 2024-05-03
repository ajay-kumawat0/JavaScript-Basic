const btns = document.querySelectorAll('.btn');
// console.log(btns);
const body = document.querySelector('body');

btns.forEach( (btn)=>{
    btn.addEventListener('click', (e)=>{
        if(e.target.id == 'blue'){
            body.style.backgroundColor = e.target.id;
        }
        else if(e.target.id == 'red'){
            body.style.backgroundColor = e.target.id;
        }
        else if(e.target.id == 'pink'){
            body.style.backgroundColor = e.target.id;
        }
        else{
            body.style.backgroundColor = e.target.id;
        }
    })
})