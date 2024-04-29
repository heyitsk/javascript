//for each loop is efficient for arrays but there is one problem that it doesn't return anything. For this we use filter
//filter also like for each and takes callback function
const myNum = [1,2,3,4,5,6,7]
const newNum = myNum.filter((num) => (num>5))
//or 
const newNum2 =myNum.filter((num)=>{
    return num>5;
})
//this was taught in function that when you declare a scope {} you have to use explicit return but if you use ( ) it uses implicit return and returns automatically 
// console.log(newNum);
// console.log(newNum2);



const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

const newbook =  books.filter((bk) => bk.genre === "History" );
//or const newbook =  books.filter((bk) => {return bk.genre === "History"} );
console.log(newbook);