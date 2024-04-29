// we don't use var because it doesn't work with block scope which it should do for running code smoothly. let and const works in block scope which is inside {}.
// "bahar se andar aa skta h andar se bahar nahi jaa skta ~ abhimanyu ki gatha". Means can access global var inside scope but cannot acces local var outside scope 



//+++++++INTERESTING++++++++

function addTwoNumber2(num1, num2){
    return num1+num2;
};
addTwoNumber2(2,3);

const addTwoNumber3 = function(num1,num2){
    return num1+num2;
}
addTwoNumber3(2,3)

//this won't show an error when function are called after the declaration 
// but when function are called *before* the declaration the second method will show an error bcz in it a variable is storing a function and you cannot call a variable before declaring it 