const hero = ['Ironman', 'thor', 'spiderman'];
const dc_hero = ['batman', 'flash', 'superman'];

hero.push(dc_hero) // it does not return new array, it modify in original array
// console.log(hero);

const heros = hero.concat(dc_hero); // it return new array it does not modify origin array
// console.log(heros);

const spreadHero = [...hero, ...dc_hero] // it also work same as concat but mostly now days this method to concat arrays
// console.log(spreadHero);

const anotherArr = [1,4,6,[7,3,8,2],[6,2,9,3,[7,2,4,6,1],9,8]]
console.log(anotherArr.flat(Infinity)); // nested array into a single array

const arr1 = 100;
const arr2 = 200;
const arr3 = 300;

// console.log(Array.of(arr1, arr2, arr3)); // convert into array