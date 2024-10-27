let para1 = document.createElement("p");
para1.innerText = "hey i'm red";
document.querySelector("body").append(para1);
para1.classList.add("red");

let h3 = document.createElement("h3");
h3.innerText = "hey i'm blue h3";
document.querySelector("body").append(blue);
h3.classList.add("blue");

let div = document.createElement("div");
let h1 = document.createElement("h1");
let para2 = document.createElement("p");
h1.innerText = "i 'm in a div";
para2.innerText = "me too";
div.append(h1);
div.append(para2);
div.classList.add("box");
document.querySelector("body").append(div);
//Qs1. Create a new input and button element on the page using JavaScript only. Set the
// text of button to “Click me”
let button = document.createElement("button");
let input = document.createElement("input");
button.innerText = "click me";
document.querySelector("body").append(input);
document.querySelector("body").append(button);
//Qs2. Add following attributes to the element :- Change placeholder value of input to “username”- Change the id of button to “btn”
button.setAttribute("id","btn");
input.setAttribute("placeholder","username");
