let btn = document.querySelector("button");


btn.addEventListener("click",function(){
    let h3= document.querySelector("h3");
    let randomColor = getRandomColor();
    h3.innerText= randomColor
    let div = document.querySelector("div");
    div.style.backgroundColor= randomColor;
    console.log("color updated ");
});
function getRandomColor(){
    let red = math.floor(math.random()*255);
    let green = math.floor(math.random()*255);
    let blue =math.floor(math.random()*255);
    let color = `(${red},${green},${blue})`;
    return color;
}