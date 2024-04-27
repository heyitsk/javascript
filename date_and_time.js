const myDate = new Date(); // creates an object date 
console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toISOString()); // Format 2024-04-17T21:06:17.000Z
console.log(myDate.toJSON()); // Format 2024-04-17T21:06:17.000Z
console.log(myDate.toLocaleString());// Format 4/17/2024, 5:06:17 PM
console.log(myDate.toLocaleDateString());// Format 4/17/2024
console.log(myDate.toDateString()); // Format wed apr 17 2024

const newDate = new Date(2024, 0, 12); // months starts from 0 in js 
console.log(newDate.toDateString());
const anotherDate = new Date(2024, 0, 12, 5, 6, 17);
console.log(anotherDate.toLocaleString());