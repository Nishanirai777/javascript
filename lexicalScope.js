function outerf(){
    let x=8;
    let y =9;
    function innerf(){
        console.log(x);
        console.log(y);
    }
    innerf();

}
//lexical Scope is a variable that defined outside a function can be accessible inside 
//another function define after the variable declaration.

//the opposite is not true.
//practicequestion
let greet ="helo";
function changeGreet(){
    let greet= "namaste";
    console.log(greet);
    function innnerGreet(){
        console.log(greet);
    }
}
console.log(greet);
changeGreet();