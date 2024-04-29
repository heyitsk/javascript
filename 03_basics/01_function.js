function sayMyName(){
    console.log("kushagra");
}; 
// sayMyName();
// sayMyName is the reference of the function and when we add () it becomes execution of the function 
function addTwoNumber(num1, num2){
    const summ = num1+num2;
    console.log(summ);
};
// const result = addTwoNumber(4,5);
// console.log(result);
// here the result comes undefined bcz our funtion is just printing the number and not "returnting" a number. So in order print the result we want the function to return the value and store it in a variable which we can print 

function addTwoNumber2(num1, num2){
    const summ = num1+num2;
    return summ;
    // any statement after return won't be executed 
};
const result2 = addTwoNumber2(3,4);
// console.log(result2);
// return statement won't directly print the result. It returns the result which we can store in a variable and print 

function loginUserMessage(username){
    return `hello ${username}, thank you for logging`
};
// const msg = loginUserMessage("kushagra");
// const msg = loginUserMessage();// this prints hello undefined just logged in. to avoid this we use if 

// console.log(msg);

function loginUserMessage2(username){
    if (username === undefined){
        return `please enter a username`
        
    }
    return `hello ${username}, thank you for logging`
};
const msg2 = loginUserMessage2();
console.log(msg2);
// to avoid this undefined we can add a default username in the parameter itself which gets overriden if we add a username. username = "kush"



// another way of declaring a function
const addTwoNumber3 = function(num1,num2){
    return num1+num2;
}
