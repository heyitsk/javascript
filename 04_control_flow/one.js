const userLoggedIn = true;
const userDebirCard = false;
const loggedInFromGoogle = true;
const loggedInFromChrome = false;

if (userLoggedIn && userDebirCard){
    console.log("user is allowed to shop ");
}
else if (userLoggedIn && !userDebirCard){
    console.log("please  enter your debit card");
}
else {
    console.log("please login");
}

//we use or bcz user can be logged in from any one
if (loggedInFromChrome || loggedInFromGoogle){
    console.log("user is successfully logged in");
}else {
    console.log("please log in");
}