let arr=[1,2,3,4,5];
let print =function(el){
    console.log(el);
};
arr.forEach(print);
//or
let arrrr=[1,2,4];
arrrr.forEach(function(el){
    console.log(el);
});
//for object 
let nisha =[
    {
        name:"saraj",
        marks: 100,
    },
    {
        name:"raju",
        marks: 50,
    },
    {
        name:"saraj",
        marks: 100,
    },
];
nisha.forEach((student)=>{
    console.log(student.marks);
});