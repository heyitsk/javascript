const num1 = 400;
console.log(num1);
const num2 = new Number(400);
console.log(num2);
// as we've seen in string when we use "new" it speicifically prints that it is a number and it shows properties and methods in its prototype in the browser console just like strings 
console.log(num2.toString.length);
//this method creates the number to string and since it has now become string we can use all properties and methods of strings 
console.log(num2.toFixed(2));
//this method is frequently used in e-com websites where you have to show calculated amount to a fixed decimal number 
const num3 = 100000
console.log(num3.toLocaleString("en-IN"));
// shows the number by adding commas. Increases readability of number that include multiple zeroes. by default commas are applied as per us standard to change we use "en-IN".
const num4 = 111.895
console.log(num4.toPrecision(4));//rounds off to 4 dig
console.log(num4.toPrecision(3));// round off to 3 dig
console.log(num4.toPrecision(2));// shows 2 precision value and rest as exponential 
console.log(num4.toPrecision(5));// rounds off to 5 dig



// **************MATHS*****************


console.log(Math);
//shows an object called Math. When we open this is browser console it shows various methods and properties of the math object that can be used 
console.log(Math.abs(-111)); // shows +ve value
console.log(Math.round(12.36)); // rounds off 
console.log(Math.ceil(4.6)); // gives ceiling value 5
console.log(Math.floor(4.2)); // gives the floor value 4
console.log(Math.random());// return btw 0 and 1. Note: includes 0 but not 1 
console.log(Math.random()*10)// return btw 0 and  10. 10 not included 
console.log((Math.random()*10)+1)// return btw 1 and 10 we do this to avoid 0 
console.log(Math.floor(Math.random()*10)+1)// return intg value 

// generic formula 
const max = 20;
const min = 10;
console.log(Math.random()* (max-min) + min);
// max is exclusive and min is inclusive i.e, the value will never be equal to max value but will include min value 
console.log(Math.random()* (max-min+1) + min);
console.log(Math.floor(Math.random()* (max-min+1) + min));
// both max and min are inclusive 



