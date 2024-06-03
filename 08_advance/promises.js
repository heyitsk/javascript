const promiseOne = new Promise(function(resolve,reject){
    //do an async task which will take time ex:
    setTimeout(function(){
       console.log("async task completed");
       resolve(); //for connection resolve and .then 
    },1000)
//firstly the async task will get completed and then later resolve will be called which invokes the .then function 
//you can't place resolve outside of the asyn task as task may take some time till then the resolve will be called which is not correct 
})
//consumption of promise 
//.then has direct connection with resolve
//promise.then function receives an argument jo upar wale settimeout or asyn task se values aayi h use receive krta h
promiseOne.then(function(){
    console.log("promise consumed");

})


new Promise(function(resolve,reject){
    setTimeout(function()
    {console.log("async task 2 complted ");
    resolve()
        },1000)
    
}).then(function(){
    console.log("promise w consumed ");
})



//now lets suppose we get some data from the asyn task and we have to print it 
//can pass arguments in the resolve in form of  *OBJECT* 
const promiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username : "kushagra", email:"abc@gmail.com"})
    },1000)
})
promiseThree.then(function(userInfo){
    console.log(userInfo);
})
//so from this we know any object passed in the resolve gets print using .then function 


const promiseFour = new Promise(function(resolve,reject){
    setTimeout(() => {
        let error = true;
        if(!error){
            resolve({username : "kushagra", email:"abc@gmail.com"})
        }else{
            reject('ERORR: something went wrong')
        }
    }, 1000);
})
//chaining of .then -> the values returned frm previous .then is used an argument in next one 
promiseFour.then((userInfo)=>{
    console.log(userInfo);
    console.log(userInfo.username); // we can do this but what if we return it what and how does it return 
    return userInfo.username
}).then((username)=>{
    console.log(username);
}).catch((err)=>{
    console.log(err);
}).finally(()=>{console.log("finally done");})
//finally tells if the promise is done or not doesn't matter if it is resolved or rejected it is like a default value 
 


const promiseFive = new Promise(function(resolve,reject){
    setTimeout(() => {
        let error = true;
        if(!error){
            resolve({username : "kushagra", email:"abc@gmail.com"})
        }else{
            reject('ERORR: something went wrong')
        }
    }, 1000);
});


async function consumePromiseFive(){
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}
consumePromiseFive()
//problem of asyn await is that it cannot handle errors direclty. to solve it we use try catch
//jis jis process me time lgega use await krenge and uska reposnse jo ayega vo var me store krenge


// async function userDetails(){
//    try {
//     const response = await fetch("https://api.github.com/users/heyitsk")
//     // console.log(response);
//     const data = await response.json() //know we know that converting to json also takes time so so use
//     console.log(data);
//    } catch (error) {
//      console.log("e:", error);
//    }

// }
// userDetails()


fetch("https://api.github.com/users/heyitsk")
.then((response)=>{
    return response.json();
})
.then((finalResponse)=>{
    console.log(finalResponse);
})
.catch((err)=>{
    console.log("something went wrong");
})