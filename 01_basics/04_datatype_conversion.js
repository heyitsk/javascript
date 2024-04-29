let score = "abc" ;
console.log(typeof(score));
let valueInBoolean = Boolean(score);
console.log(typeof(valueInBoolean));
console.log(valueInBoolean);

// 2abc > Nan
// null > 0
// undefined > Nan
// true > 1, false > 0
// 1 > true, 0 > false
// "" > false, "abc" > true

// ********OPERATIONS*********
 
console.log("1"+2+3);
console.log(1+2+"3");

// when string first then other var treated as strings only and conversion to integer will not occur 
// when string at last conversion to integer will occur 