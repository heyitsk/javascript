const arr1 = [0,1,2,3];
const arr2= [4,5,6,[7,8,9]];
// arr1.push(arr2) 
// // this doesn't push arr2 contents at end of arr1 but creates array in array and whole arr2 as 5th element 
// console.log(arr1);
// console.log(arr1[4][3][2]);
const newArr = arr1. concat(arr2) // this adds elements of arr2 just after arr1
// NOTE:- we need new array while using concat whereas no new array is req while using push as it pushes in the existing array 
console.log(newArr); 
const newArr2 = [...arr1, ...arr2]; // this concatinates the arrays too. This is called SPREAD METHOD as it spreads the indiv elements of array and joins
console.log(newArr2);
const arr3 = [0,1,2,3,[4,5,5],6,7,[8,9,[1,2]]];
console.log(arr3.flat(0));
// depth 0 means no subarray will be opened and showed as indiv elements. depth 1 means 4,5,5 and 8,9 will be opened but [1,2] will be showed like this. depth 3 means the 1,2 will be opened as well 


let a = 10;
let b = 20;
let c =30;
console.log(Array.of(a,b,c, "k")); // creates an array of elements


console.log(Array.isArray("kush"));
console.log(Array.isArray([0,2,23,4,'kush'])); // checks for array return true or false 


console.log(Array.from("kush")); // creates an array with k , u , s , h as indiv elements
console.log(Array.from("kush,1,2,3"));


