
console.log("after my if statements");
//ps
//traffic light system
let color = "green";
if (color === "red") {
    console.log("stop! light color is red");


}
else if  (color === "yellow") {
    console.log("slow down light color si yellow");
}
 else if (color === "green") {
    console.log("go.. Light color is green");
}
let age = 28;
if (age >= 18) {
    console.log("you can vote");
}
else if (age < 18) {
    console.log("you can not vote");

}
else{
    console.log("Traffic light is broken");
}
//console.log("before my if statements");
//let age = 2;
//if (age >= 18) {
//  console.log("you can vote");
//}
let marks = 56;
if (marks >= 80) {
    console.log("A++");

}
else if (marks >= 75) {
    console.log("A");
    
}
    let size = "XL";
if(size ==="XL"){
    console.log("the price is Rs.250");

}
else if(size === "L"){
    console.log("the price is Rs.200");
}
else if(size === "M"){
    console.log("the price is Rs.100");
}
else {
    console.log("the price is Rs.50");
}
//nested if else 
let marks= 23;
if(marks >=30){
    console.log("pass");
    if(marks >=80){
        console.log("grade:0");
    }else{
        console.log("grade:A");
    }
}
else{
    console.log("try again");
}

else if (marks < 30) {
    console.log("F");
}
//A good stings is a a strings that starts with the letters a and has lenth >3 then write a; program to find the//
 //if a string is good or not
 let str = "le";
 if(str[0]=== "a" && str.length >  3){
    console.log("good strings");

 }else{
    console.log("not a good strings");
 }
