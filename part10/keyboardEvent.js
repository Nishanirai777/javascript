//let nisha = document.querySelector("input");
//nisha.addEventListener("keydown",function()
//{
    //console.log("key was pressed");
//});
let nisha = document.querySelector("input");
nisha.addEventListener("keydown",function(event)
{
    //console.log("key was released");
    //console.log(event);
    //console.log( "code =",event.code);
    //console.log("key=",event.key);
    if(event.code=="key"){
        console.log("charaters moves up");
    }else if (event.code== "keyD"){
        console.log("character moves down");
    }else if(event.code=="keyL"){
        console.log("character moves left");
    } else if (event.code=="keyR"){
        console.log("character moves right");
    }
});