// const tinderUser = new Object(); 
// const tinderUser = {}
// both are same and creates the same object the only diff is that 1st one is a singleton object while 2nd one is not 
const tinderUser = {};

tinderUser.name = "kush";
tinderUser.id = "123abc";
tinderUser.isLoggedIn = false;

// console.log(tinderUser);

const regularUser = {
    email: "ka@gmail.com",
    fullname: {
        userfullname: {
            firstName: "kushagra",
            lastName: "agarwal"
        }
    }
}
// console.log(regularUser.fullname.userfullname.firstName);
// console.log(regularUser["fullname"]["userfullname"]["lastName"]);

const obj1 = {1:"a", 2:"b"};
const obj2 = {4:"c", 3:"d"};
const obj3 = {...obj1,...obj2};
// SPREAD method, same as array.
const obj4 = Object.assign({},obj1, obj2)
// console.log(obj4);

// We get values from databases as *arrays of objects*. ex:-
const users = [
    {
        name: "a",
        id: 123,
    },
    {
        name: "b",
        id: 1233
    },
    {
        name: "c",
        id: 12,
    },
    {
        name: "d",
        id: 1,
    }
]
// console.log(users[1].name);
// console.log(users[1]["id"]);

// console.log(tinderUser);
// console.log(Object.keys(tinderUser));
// // creates an array of keys of the objects 
// console.log(Object.values(tinderUser));
// // creates an array of values of the objects 

// console.log(tinderUser.hasOwnProperty("id"));
// helps to check if a property is present or not 
