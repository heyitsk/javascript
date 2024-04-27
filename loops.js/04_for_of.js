//for of -> array specific loop 
const arr = [1,2,3,4,5];
for (const i of arr) {
    // console.log(i);
}
 
const str = "abcde";
for (const alphabet of str) {
    // console.log(alphabet);
}

//Maps -> they are like objects but store unique values and in the same order in which they are added 
const map = new Map();
map.set("IN","India");
map.set("USA","United States Of Amerida");
map.set("Fr","France");
// console.log(map);

for (const key of map) {
    console.log(key); 
    // this prints both key and value of the map but in array 
    
}
// in order to print the desired we use [key,value]
for (const [key,value] of map) {
    console.log(key, value);
    
}

const myobj = {
    name : "kush",
    id: 1234,
    section: 7
}
// for (const key of myobj) {
//     console.log(key);
    
// }
// this gives error so from this we know that object is not iterable using for of loop 


