function multipleGreet(func,count){
    for(let i=1; i<=count; i++){
        func();
    }
}



let greet= function(){
    console.log("hello");

    
}
multipleGreet(greet,1000);
//higher oder 
let odd = function (n){
    console.log(!(n%2==2));
} 
//for even 
let even = function(n)

{
    console.log(n%2==0);
}
//oddeventest
function oddEvenFactory(request){
if(request=="odd")
{
    let odd = function (n){
        console.log(!(n%2==2));
    } 
    return odd;
} else if (request=="even"){
        let even = function(n){
            console.log(n%2 == 0);
        }
return even;
    } else {
        console.log("wrong request");
    }
}
