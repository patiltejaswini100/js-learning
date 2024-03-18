//numeric string used with + gives string type//
console.log("=================Implicit conversion to string===============");
let result;
 
result = '3' + '2';
console.log(`The result is: ${result}`);

result = '3' + true;
console.log(`The result is: ${result}`);

result = '3' + undefined;
console.log(`The result is: ${result}`);

result = '3' + null;
console.log(`The result is: ${result}`);


console.log("=================Implicit boolean conversion to number===============");
//if boolean is used true is 1 and false is 0//

let result1;
result1 = '4'- true;
console.log(`The result of '4'- true is: ${result1}`);

result1 = 4 + true;
console.log(`The result of 4 + true is: ${result1}`);

result1 = 4 + false;
console.log(`The result of 4 + false is: ${result1}`);

console.log("=================Implicit boolean conversion to number===============");
//numeric string used with -, *, / result number type//
let result2;
result2 = '4'- '2';
console.log(`The result of '4'- '2' is: ${result2}`);

result2 = '4'- 2;
console.log(`The result of '4'- 2 is: ${result2}`);

result2 = '4'* 2;
console.log(`The result of '4'* 2 is: ${result2}`);

result2 = '4'/ 2;
console.log(`The result of '4'/ 2 is: ${result2}`);

console.log("=================Undefined used with null, boolean or number gives NaN===============");
//arithmetic operation of undefined used with null, boolean or number gives NaN//
let result3;
result3 = 4 + undefined;
console.log(`The result of 4 + undefined is: ${result3}`);

result3 = 4 - undefined;
console.log(`The result of 4 - undefined is: ${result3}`);

result3 = true + undefined;
console.log(`The result of true + undefined is: ${result3}`);

result3 = null + undefined;
console.log(`The result of null + undefined is: ${result3}`);

console.log("=================Explicit conversion to string===============");
console.log("===============Explicit conversion: Convert number strings and boolean values to numbers,In that case we can use Number()===============");
//string to number//
result4 = Number(324)
console.log(`The conversion of '324' is: ${result4}`);

result4 = Number(324e-1)
console.log(`The conversion of '324e-1' is: ${result4}`);

result4 = Number(true)
console.log(`The conversion of 'true' is: ${result4}`);

result4 = Number(false)
console.log(`The conversion of 'false' is: ${result4}`);

console.log("=================Invalid string to number return NaN===============");
//Invalid string to number return NaN//
result5 = Number('Hello')
console.log(`Invalid string to number 'Number('Hello')'  is: ${result5}`);

result5 = Number('undefined')
console.log(`Invalid string to number 'Number('undefined')'  is: ${result5}`);

result5 = Number('NaN')
console.log(`Invalid string to number 'Number('NaN')'  is: ${result5}`);

console.log("=================string to number using + operator===============");
var numberInString = '100'
console.log(`Type of '100' is: ${typeof numberInString}`);

var myNumber = +numberInString
console.log(`Type of '+numberInString' is: ${typeof numberInString}`);

console.log("=================number to string data type conversion using toString() method===============");
var myNumber = 100
console.log(`Type of 100 is: ${typeof numberInString}`);

var afterConversion = myNumber.toString();
console.log(`Type of 'myNumber.toString()' is: ${typeof numberInString}`);

