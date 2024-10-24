let name= "nisha";
console.log(...name);
//in a spread value are represent in indivuzal form
//in a spread value are represent in indivuzal form
//in a spread value are represent in indivuzal form
//spread (array literals)
let arr =[1,2,3,4,5,9];
let ans= [...arr];
console.log(ans);
let odd=[1,3,5,7,9];
let even =[2,4,6,8];
let anss= [...odd,...even];
console.log(anss);
//spread(object literals)
const data={
    email: "rainisha434@gmail.com",
    password:"abcd",
};
const datacopy= {...data};
console.log(datacopy);
