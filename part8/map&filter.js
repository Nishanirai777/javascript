let num = [1,2,3,4];
let double = num.map((el)=>{
    return el*2;
});
let student =[
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
let gpa = student.map((el)=>{
    return el.marks/10
});
//filter function
let nums =[1,2,3,4,5,6,8,9,7];
let ans =nums.filter((el)=>{
    return el    % 2 ==0;
    //for less than 5
    return    el <5;
    //for odd
    //return el % 2!==0;
});
