let btn= document.querySelector("button");
console.dir(btn);
//btn.onclick= function(){
    //alert("hello");
    //console.log("button was clicked ."); 
//};
function sayhello(){
    alert("hello");
}
btn.onclick= sayhello;
//for all the button use this 
let btns= document.querySelectorAll("button");
for(btn of btns){
    //btn.onclick= sayhello;
    //btn.onclick= sayName;
    //btn.onmouseenter= function(){
        //console.log("you entered a function ");
        //for eventLIstner
        btn.addEventListener ("click", sayhello);
        btn.addEventListener("click",sayName);
        btn.addEventListener ("dblclick",function(){
            console.log("you double click me");
        })
    }
    //console.dir(btn);

function sayhello(){
    alert("hello");
}
function sayName(){
    alert("apna college");
}

