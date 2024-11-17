
h1 = document.querySelector("h1");


function  changeColor(color, delay){
    return new Promise((resolve ,reject)=>{
        setTimeout(()=>{
            h1.style.color= color;
            console.log(`color changed to ${color}!`);
            resolve("color changed!");
        },delay);
    });
}
async function demo() {
    try{
    await changeColor("red",1000);
    await changeColor("maroon",1000);
    await changeColor("black",1000);
    
    await changeColor("green",1000);
}catch (err){
console.log(err);
console.log("error caught..")
}

let a=9;
console.log(a);
console.log("the value of a is:" , a+3);
}