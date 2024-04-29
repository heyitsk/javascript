const arr = [1,2,3,4,5,6];
const newArr= arr.map((num)=> num+10 );
// or {return num+10}
// console.log(newArr);


//Chaining -> in this concept result of 1st method gets passed in the second 
const newarr2 = arr
                .map((num)=>num*5)
                .map((num)=>num+1)
                .filter((num)=>(num>20))
console.log(newarr2);