function getnum(){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            let num = math.floor(math.random()*10)+ 1;
            console.log(num);
            resolve();
        },1000);
    });
}
async function demo() {
    await getnum();
    await getnum();
    getnum();
    
}