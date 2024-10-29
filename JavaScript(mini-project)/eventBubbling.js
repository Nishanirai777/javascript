let div = document.querySelector("div");
let ul = document.querySelector("ul");
let lli= document.querySelector("li");
div.addEventListener("click",function(){
    console.log("div was clicked");
})
ul.addEventListener("click",function(){
    console.log("ul was clicked");
})
for(li of lli){
    li.addEventListener("click",function(){
        console.log("li was clicked");
    })
}