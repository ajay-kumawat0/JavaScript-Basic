const array1 = [1, 2, 3, 4];

// 0 + 1 + 2 + 3 + 4
const initialValue = 0;
const sumWithInitial = array1.reduce(
  (accumulator, currentValue) => accumulator + currentValue,  
  initialValue,
);
// accumulator=> is an empty array  // initialValue=> here intiValue(0) it pass to accumulator when a loop run in forst time and the second time acc+curr value passed in 
// accumulator 

// console.log(sumWithInitial);

const arr = [1, 2, 3, 4];
var total = arr.reduce((acc,cur)=> acc+cur, 8);
// console.log(total);

const product = [
    {
        name : 'book',
        price : 199
    },
    {
        name : 'toy',
        price : 99
    },
    {
        name : 'glass',
        price : 129
    },
    {
        name : 'laptop',
        price : 199999
    },
]


const totalPay = product.reduce((acc,item)=>acc+item.price,0)
console.log(totalPay);