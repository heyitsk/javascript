const myobj = {
    name : "kush",
    id: 1234,
    section: 7
}
// we know for of loop doesn't work for objects.
// for in loop works for it 
for (const key in myobj) {
//    console.log(`keys = ${key} and value =  ${myobj[key]}`);
   // i used ${myobj.key} and it gave undefined so can't use this
}

//using for in for array --> 
const arr = ["kush", "abc", "xyz"];
for (const key in arr) {
    // console.log(key); this prints keys of array. Yes arrays have keys too which are indexes of respective elements 
    console.log(arr[key]); //this prints contents of strings
}

// FUN FACT:- objects were designed only because arrays had default keys which start from 0 and in objects we can add our desired keys 

// Maps cannot be iterated using for in 

const str= "kushagra";
for (const key in str) {
    // console.log(key); this prints the indexes of all the alphabets 
}


//++++++++++CONCLUSION+++++++++++
// for of -> maps, each element of str, each element of array
// for in ->objects, index of each element of str, index or key of each element of array