//check if all numbers in our array are multiples of 10 or not.
let arr=[10,20,30,40,50];
let ans= arr.reduce((ans,el)=>{
    if(ans<el){
        return ans;
    }else {
        return el;
    }
} );
console.log(ans);