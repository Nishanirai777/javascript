let smallImages= document.getElementsByClassName("oldImg");
for(let i=0;i<smallImages.length;i++){
    console.dir(smallImages[i]);
    //if you need a src then write this
    console.dir(smallImages[i].src);
}
//if you need any change using  getElementByTagName then use this
document.getElementsByTagName("p");
document.getElementsByTagName("p")[1].innerText="abc";
//use inscept 
//ouery selectors 
document.querySelector('p');
document.querySelector('#myId');
document.querySelector('.myClass');
//selects  all p elements 
document.querySelectorAll("p");
