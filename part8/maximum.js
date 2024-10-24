let array=[1,2,3,4,6,8,0,90];
let ans= array.reduce((max,el)=>{
    if(max<el){
        return el;
    }else{
        return max;
    }
});
console.log(ans);
//or 
let max =-1;
for(let i=0; i<array.length;i++){
    if(max<array[i]){
        max=array[i];
    }
}
console.log(max);