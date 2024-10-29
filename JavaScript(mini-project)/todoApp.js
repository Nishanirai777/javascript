let h1 =document.querySelector("h1");
let ul= document.querySelector("ul");
let inp= document.querySelector("input");
let btn= document.querySelector("button");
btn.addEventListener("click",function(){
    let item= document.createElement("li");
    item.innerText= inp.value;
    let delBtn= document.createElement("button");
    delBtn.innerText="delete";
    delBtn.classList.add("delete");
    item.appendChild(delBtn);
    ul.appendChild(item);
    inp.value= " ";
});
let delBtns= document.querySelectorAll(".delete");
for(delBtn of delBtns){
    delBtn.addEventListener("click",function(){
        let par = this.parentElement;
        console.log(par);
        par.remove();
    });
}
//it's me nisha
