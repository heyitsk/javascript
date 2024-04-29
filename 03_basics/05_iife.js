//Immediately Invoked Function Expression 
// we require this to overcome the problem of pollution by global scope 

function chaii(){
    console.log("Db connected");
}
// chaii();
//instead of this we can do 
//named iife
(function chaiii(){
    console.log("Db connected");
})();
// the first () is for the definition of the function and the ssecond () is for function execution 
// ; after () is important to end the iife 

//unnamed iife
((name) => {
    console.log(`Db connected to ${name}`);
})("kush");
// in the second () we can pass arguments like this bcz this is exaclty how we do function calling chai("kush"). it is as same as this
