let para = document.querySelector("p");
let h1= document.querySelector("h1");
function changeColor(){
    console.dir(this.innerText);
    this.style.backgroundColor ="maroon";
}
para.addEventListener("click",changeColor);
h1.addEventListener("click",changeColor);

//para.addEventListener ("click", function(){
    //console.log("para was clicked ..");
//});

let nisha = document.querySelector(".box");
nisha.addEventListener("mouseenter",function(){
    console.log("you are in the box now");
});
//thsi in event listner 
let btn = document.querySelector("button");
btn.addEventListener("click",function(){
    console.log(this.innerText);
    this.style.backgroundColor= "blue";
});