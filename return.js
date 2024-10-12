function sum(a, b) {
    return a + b;
}
let s = sum(4, 5);
console.log(s);
//we can write also this
//console.log(sum(4,5)); 
function isAdult(age) {
    if (age >= 18) {
        return "adult";
    } else {
        return "not adult";
    }
}
//if you want to print then inspect then write this
//isSdult(23);
//if you write this
function sum(a, b) {
    console.log("hello");
    console.log("hello");
    return a + b;
    console.log("hello nisha");
    console.log("hello");
}
let sa = sum(4, 5);
console.log(sa);
//after written return then does not print another things 
//ps
function getSum(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
}
