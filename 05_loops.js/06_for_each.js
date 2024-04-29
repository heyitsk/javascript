const arr = ["kush","abc","xyz","lmn"];
//for each loop is directly imbeded as property of array 
//in it a callback function is used and we callback function don't have names so we don't assign a name to the function
arr.forEach( function (i) {
    // console.log(i);
})
arr.forEach( (element) => {
    // console.log(element);
});
 

//can also define function somewhere else and use it as a callback function
function printElements (item){
    console.log(item);
}
// arr.forEach( printElements)
// NOTE:- we just have to give the "reference" of the function we don't have to execute it using ()

// for each has other parameters as well apart form item like index and array itself 
arr.forEach( (item, index, array) => {
    // console.log(item,index,array);
})

// in dealing with backend data we oftenly get data in this form [{},{},{}]
const arr2= [{
    name:"kush",
    id: 12
},
{
    name:"as",
    id: 13
},
{
    name:"asdasd",
    id: 1
}
]
arr2.forEach((item) => {
    console.log(item.name);
    // each object is considered an item and we know how to access values in objects
    console.log(item["id"]);
});

