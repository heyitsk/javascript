const user = {
    username: "kush",
    price: 999,
    welcomeMessage: function(){
        console.log(`welcome to website ${this.username}`);
        console.log(this);
    }
}
// user.welcomeMessage()
// user.username = "kushagra";
// user.welcomeMessage()
// this keyword sets the *current context*. Which means it tells
// console.log(this) 
//returns an empty object in node environment whereas in browser it shows the most global object which is the window object 

function chai (){
    let username="kush";
    console.log(this.username);
}
// chai();

//inside function when we console log this it shows many values but when we use this.username we cannot use this inside functions like we used in objects 


//arrow function
const chai1 = () => {
    let username="kush";
    console.log(this);
}
// chai1()

// so one major difference between arrow function and normal function is that when we console.log(this) in normal function is shows various values whereas when we do this in arrow function it shows empty object {}. The similiarity is when we do this.username in both we get undefined 


const addTwo = (num1,num2) => {
    return num1+num2;
}
console.log(addTwo(3,4))


// implicit return arrow function
const addTwo2 = (num1,num2) => ( num1+num2) ;
console.log(addTwo2(4,4));
// So basically, {} use kara toh return use krna padega and () use kra toh nahi padega


