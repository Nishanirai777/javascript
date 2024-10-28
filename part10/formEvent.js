let form = document.querySelector("form");
form.addEventListener("submit",function(event){
    event.preventDefault();
    let inp= document.querySelector("input");
    console.dir(inp);
    console.log(inp.value);
    console.log(inp.innerText);
    alert("form submitted");
});