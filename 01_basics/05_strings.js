const name ="kushagra";
const age="18";
console.log(`my name is ${name.toUpperCase()} and my age is ${age}`);
// this is called string interpolation and we can easily add prop directly like this 
const newStr = new String ("kush-agra"); 
// when we use new keyword it creates a string object whereas when we don't use new keyword it still creates a string but not a string object 
console.log(newStr);
// this is another method of creating a string. We use this to envoke objects. When we paste it in the console it shows an object with each letter of string as key value pair (0:"k" 1:"u" etc)
console.log(newStr[0]); // since this comes out as object we can access the value using keys 
// can add multiple methods in strings like 
console.log(`my name is ${name.toUpperCase().includes()} and my age is ${age}`);
// in all these methods the original string doesn't changes it just creates copy of the string and changes it as we learned the concept in stack memory 

