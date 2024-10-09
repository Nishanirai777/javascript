const movie= "avatar";
let guess= prompt("guess my favorite movie....");
while((guess!=movie)){
    if(guess=="quit"){
        console.log("you are quit..");
        break;
    }
    guess= prompt("wrong guess please try again...!");
    
}
    if(guess==movie){
        console.log("congrate.....!");
    }  

