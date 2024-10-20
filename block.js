//{}block doesnot work if you write var
{
    var a = 99;
}
console.log(a);
{
    let b = 90;
    console.log(b);//{}if you write under the this bracket this is the block scope
}
//
for (let i = 1; i <= 6; i++) {
    console.log(i);
}
console.log(i);
let age = 56;
if (age >= 18) {
    let str = "adult";
    console.log(str);
}