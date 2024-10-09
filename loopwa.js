let fruit= ["mango","apple","avocado","banana","orange"];
fruit.push("litche");
for(let i=0;i<fruit.length;i++){

    console.log(i, fruit[i]);
}
//for even update i=i+2 
//for odd update i=i+2 but i=1
//for reverse
for(let i=fruit.length-1;i>=0; i--){
    console.log(i, fruit[i]);
}