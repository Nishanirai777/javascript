const calculator={
    add: function(a,b){
        return a+b;
    },
    sub: function(a,b){
        return a-b;
    },
    mul:function(a,b){
        return a*b;
    }
};
//methods (shorthand)
const calculatorr={
add(a,b){
    return a+b;
},
sub(a,b){
    return a-b;
},
};
//ps
//write a javaScript function that returns array elements larger than a number
let arr =[1,2,3,4,5,6,7,8,9,10];
let num =5;
function getElement(arr,num){
    for(let i= 0; i<arr.length; i++){
        if(arr[i]>num){
            console.log(arr[i]);
        }
    }

}
getElement(arr,num);
