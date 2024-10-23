//write an arrow function  that returns the square of the number 'n.
 const squareFunction =n=>n*n; 
 console.log(squareFunction(4));
 //or
 const square= (n)=>{
    return n*n;
 };
//write a function that prints "hello world 5 times at intervals of 2s each"
 let id = setInterval(()=>{
    console.log("hello world");
},2000);
setTimeout(()=>{
    clearInterval(id);
},10000);