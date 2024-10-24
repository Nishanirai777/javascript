function sum(...args){
    for(let i=0;i<args.length;i++){
        console.log("you give us :",args[i]);
    }
}
function min(...args){
    return args.reduce((min ,el)=>{
        if(min>el){
            return el;
        }else{
            return min;
        }
    });
}
//for sum
function sum(...args){
    return args.reduce((sum,el)=>sum+el);
}