function hello(){
    console.log("hello beautiful people");
}
//for function call write this
hello();
function printName(){
    console.log("this is  function ");
    console.log("here we build the function");
}
printName();
function nisha(){
    for(let i=1; i<=5; i++){
        console.log(i);    }
}
nisha();
function isAdult(){
    let age=13;
    if(age>=18){
        console.log("adult");
    }else{
        console.log("not adult");
    }
}
isAdult();
function printPoem(){
    console.log("twinkle twinkle, little star");
    console.log("how i wonder what you are");
}
printPoem();
//create a function to roll a dice & always display the value ofthe dice (1 to 6)
function rollDice(){
    let random= math.floor(math.random()*6)+1;
console.log(random);
}
rollDice();