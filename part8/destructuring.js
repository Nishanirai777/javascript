let names=["nisha","saraj","peter","mithu"];
//let a=names[0];
//let b=names[1];
//let c=names[3];
//for short method
let [a,b,c ,...pthers]=names;
//destructuring for object
const students={
    name: "nisha",
    age: 21,
    class:16,
    username:"@nisha123",
    password:"vlkd",
};
//let username= students.username;
//short method
let {username,password ,city="sindhuli"}=students;
