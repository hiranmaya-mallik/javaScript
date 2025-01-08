// Array = An Array is a data structure that stores a collection of data.

let fruits = ['apple', 'banana', 'orange'];
console.log(fruits);

fruits.push('nutes') // adding the array of last index 
console.log(fruits);

fruits.pop(); // removing the array of last index
console.log(fruits)

fruits.shift()
console.log(fruits)  // removing the array of first index

fruits.unshift('apple')
console.log(fruits)  // adding the array of first index


  // concat method  :- its helps adding two arrays

let fruit1 = ['apple']
let fruit2 = ['banana']

let add = fruit1.concat(fruit2);
console.log(add)

  // indexOf method :- searching the elements of the array.

  let allFruits = ['apple', 'orange','banana'];
  console.log(allFruits.indexOf('apple'));

  // includes returns this type of fruit present in the array or not.

  console.log(allFruits.includes('water melon'))

 // reverse method returns :- the original array revering to the original

 console.log(allFruits.reverse())

 // sort method :- in-place sorting, case sensitive

 console.log(allFruits.sort())