console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);

// js works differently for comparision operators and equality operator 
// comparision operators convert null to 0 and compare whereas equality operator doesnt convert 

console.log(undefined > 0);
console.log(undefined == 0);
console.log(undefined >= 0);
console.log(undefined < 0);

// undefined gives false in all comparisions and equality operators 

console.log("2"==2);
console.log("2"===2);

// === compares values as well as datatypes and gives false if datatype is different 
