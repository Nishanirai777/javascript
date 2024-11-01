h1= document.querySelector("h1");

//setTimeout(()=>{
    //h1.style.color="red";
//},1000)
//setTimeout(()=>{
    //h1.style.color="green";
//},2000)
//setTimeout(()=>{
    //h1.style.color="blue";
//},3000)
//setTimeout(()=>{
    //h1.style.color="maroon";
///},4000)
//for better programmer this is use for same process
function changeColor(color, delay,nextColorChange){
    setTimeout(() => {
        h1.style.color=color;
        if(nextColorChange)nextColorChange();
    }, delay);
}
changeColor("red",1000,()=>{
changeColor("maroon",1000,()=>{
    changeColor("blue",1000,()=>{
        changeColor("yellow",1000);

       

        });

    });

});

