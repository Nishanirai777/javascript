//scope determines the accessibility of variables ,objeccts and functions from different parts of teh code.
//function ,block lexical
let sum =99;//global scope
function calsum(a,b){
    let sum = a+b;//function scope 
    console.log(sum);
}
calsum(1,2);
console.log(sum);