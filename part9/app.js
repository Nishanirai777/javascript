let smallImages= document.getElementsByClassName("oldImg");
for(let i=0;i<smallImages.length;i++){
    console.dir(smallImages[i]);
    //if you need a src then write this
    console.dir(smallImages[i].src);
}
//if you need any change using  getElementByTagName then use this
document.getElementsByTagName("p");
ocument.getElementsByTagName("p")[1].innerText="abc";
//use inscept 
