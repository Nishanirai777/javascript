const max= prompt("enter the max number");
const random=  math.floor(math.random()*max)+1;
let guess= prompt("guess the number you want to print..");
while(true){
if(guess=="quit"){
    console.log("user quit the process");
    break;
}
if(guess==random){
    console.log("you are right! congratsW!!");
    break;
}else if(guess<random){
    guess= prompt("hint: your guess was too small.please try again");
}
else{
    guess =prompt("hint:your guess was too large .please try again");
}
}