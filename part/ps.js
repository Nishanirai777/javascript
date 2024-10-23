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
//write an arrow function named arrayAverage that accepts an array of numbers and returns the average of those numbers.
const arrayAveragee =(arr)=>{
    let total =0;
    for (let number of arr){
        total +=number;
    }
    return total / arr.length;
};
let arr =[1,2,3,4,5,6];
console.log(arrayAveragee(arr));
//write an arrow function named is even ()that takes a single numbers as arguments and returns if it is even or not.
let num =4;
const isEven =(num)=>num%2 ==0;
