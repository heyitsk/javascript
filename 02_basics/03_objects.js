// object made from contructor are singleton 

const mySymbol = Symbol("abc");
// ways to declare a symbol. NOTE:- new keyword is not used 

//object literals ->
const User = {
    name : "Kushagra" ,
    age : 18 ,
    "full name" : "Kushagra Agarwal" , 
    // we don't save keys like "abc" but behind the scenes this is how they get saved i.e as strings 
    email : "kushagradpr2005@gmail.com" ,
    isLoggedIn : false, 
    lastLoginDays: ["Monday","Wednesday" , "Friday"],
    [mySymbol]: "key1" 
    // unique way to use symbol as a key 

}


// console.log(User);
// console.log(User.age);
// console.log(User ["age"]);
// console.log(User ["full name"]); 
// // to access keys which are strings 
// console.log(User[mySymbol]);    

//since objects have mutable pair values so we can change them 
// User.email = "karoch1548@gmail.com";
// User["email"] = "karock1548@gmail.com";

// Object.freeze(User); 
// // with this we can freeze the object and we no longer can make changes 
// User.email = "ka@gmail.com"; // no changes were made 
// console.log(User);

// we can also access functions inside the objects 
User.greeting = function(){
    console.log("hello user");
}
User.greetingTwo = function(){
    console.log(`hello, ${this.email}`);
}

console.log(User.greeting());
console.log(User.greetingTwo());