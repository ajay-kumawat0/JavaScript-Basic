const language = ['java', 'c', 'c++', 'javaScript'];

// language.forEach((item)=>{
//     // console.log(item);
// })


const val = language.forEach((item) => {
    // console.log(item);
})
// console.log(val);

// forEach doed not anything

// ********************* Filter *************************
// it does not change original array 
// it return new array

var num = [1, 2, 3, 4, 5, 6, 4, 6, 8, 3, 9, 6, 3]
// var newNum = num.filter((item) => item > 5)
var newNum = num.filter((item) => {
    return item > 5
})

// console.log(num);
// console.log(newNum);


const newNum1 = [];
newNum.forEach((num)=>{
    if(num > 5){
        newNum1.push(num)
    }
})

console.log(newNum1);

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

  let userBooks = books.filter( (bk) => bk.genre === 'History')

  userBooks = books.filter( (bk) => { 
    return bk.publish >= 1995 && bk.genre === "History"
})
  console.log(userBooks);