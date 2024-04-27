const email = "kush";
if (email){
    console.log("got user email");
} else{
    console.log("not got user email");
}
// here look carefully no comparision is done and still just the string value is supposed to be true. if we put empty string it is considered as false. This is what truthy and falsy values are which means some are supposed to be true while others as false 


// falsy values ->
// 0, -0, NaN, null, undefined, "", false, BigInt 0n;


//truthy values ->
// "0","false"," ",[],{}, function(){}

//method of checking empty array 
const arr = [];
if (arr.length === 0){
    console.log("array is empty");
}

//method of checking empty objecy 
const emptyObject = {};
if (Object.keys(emptyObject).length === 0){
    console.log("object is empty");
}


// false == 0, 0 == "", 0 =="" all return true value 



// Nulling Coalescing operator ??. It deals with null and undefined 
let val1;
// val1 = null??4;
// val1 = undefined??4;
// val1 = null??12??14 returns the 1st value it gets 


console.log(val1);
// what it does is it adds a safety check to the null and undefined. Basically agar null aaye toh kya doosri koi value hai jo use kr skte h nahi toh fir null se hi deal krna h. same for undefined 



// Turnary Operator 
// condition ? true : false 
const price = 100;
price > 120 ? console.log("greater than 120") : console.log("smaller");