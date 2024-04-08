console.log("================1. Arrow function with no argument and no return value================");

let show = () => {

    console.log(`Good Morning, Today is Monday`);
}
show()
 

console.log("================2. Arrow function with arguments and no return value================");

let multiplication = (num1, num2, num3) => {
console.log(`Multiplication of numbers is : ${num1*num2*num3}`);
}
multiplication(5, 5, 2);
multiplication(10, 4, num3=1);



 

console.log("================3. Arrow function with arguments and return value================"); 

let addition = (n1, n2, n3, n4, n5) => {

    let add = n1+n2+n3+n4+n5;

    return add;

}
let addResult = addition(100, 100, 200, 349, 756);
console.log(`Addition of given numbers is : ${addResult}`);

let addResult1 = addition("I am", " learning", " ES6", " features", " in depth");
console.log(`Addition of given string is : ${addResult1}`);