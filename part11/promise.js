function savetoDb(data,success,failure){
    let internetSpeed =Math.floor(Math()*10 +1);
    if(internetSpeed>4){
        success();
    }else{
        failure();
    }
}
savetoDb("apna college",()=>{
    console.log("sucess: your data was saved");
},
()=> {
    console.log("failure :weak connection .data not saved");
}
);