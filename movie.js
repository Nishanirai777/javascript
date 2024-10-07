const movie= "avatar";
let guess= prompt("guess my favorite movie....");
while((guess!=movie)&&(guess!="quit")){
    guess= prompt("wrong guess please try again...!");
    
}
    if(guess==movie){
        console.log("congrate.....!");
    }else {
        console.log("you are quit..!");
    }

