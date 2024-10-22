console.log("hi there ");
setTimeout(()=>{
    console.log(" nisha website.");
},7000);
console.log("welcome to.");
//setInterval function run continues
let id= setInterval(()=>{
    console.log("nisha");
},5000);
console.log(id);
let id1= setInterval(()=>{
    console.log("nisha");
},5000);
console.log(id1);
//for stop
clearInterval(id);
clearInterval(id1);
