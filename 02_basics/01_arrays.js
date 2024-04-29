const arr = [0,1,2,3,4,5, true, "kush"];
arr.push(7); // push 7 at the end
arr.pop(); // pops out the last element 
arr.unshift("hi"); // adds the value to the beginning of array 
arr.shift(); // removes the 1st element 
console.log(arr.includes("kush"));  // returns boolean value 
console.log(arr.indexOf(2)); // returns -1 if number searched is not present 
let newArr = arr.join(); // this convert array into *strings*
console.log(newArr); 
const originalArr1 = [0,1,2,3,4,5];
console.log(originalArr1);
const sliceArr = originalArr1.slice(1,3); // end index is exclusive and slice doesn't change original index 
console.log(sliceArr);
console.log(originalArr1);
const spliceArr = originalArr1.splice(1,3); // end index inclusive and splice changes original index 
console.log(spliceArr);
console.log(originalArr1);


