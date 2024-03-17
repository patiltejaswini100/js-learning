console.log("========================Step-1====================");
function greaterNumber(arg1, arg2) {

    
    var max = arg1 > arg2 ? arg1 : arg2 
    console.log(`Greatest number among ${arg1} & ${arg2} is: ${max}`);
    
    
}
greaterNumber(10, -10);
greaterNumber(800, 899);
 
console.log("========================Step-2====================");
var isEvenorOddNum = function (num) {
    var result = num % 2 == 0 ? "true (given number is even)" : "false (given number is odd)";
   return result;
}
var n1=29;
var result = isEvenorOddNum(n1);
console.log(`Return value for ${n1} is : ${result} `);

var n2=44;
var result = isEvenorOddNum(n2); 
console.log(`Return value for ${n2} is : ${result} `);

var n3=0;
var result = isEvenorOddNum(n3); 
console.log(`Return value for ${n3} is : ${result} `);

var n4=101;
var result = isEvenorOddNum(n4); 
console.log(`Return value for ${n4} is : ${result} `);

console.log("========================Step-3====================");
var wordLength = function(word){
    var result = word.length%2==0 ? `Given word "${word}" is with EVEN length`:`Given word ${word} is with ODD length`;
    return result;
   }
   var output=wordLength("JavaScript");
   console.log(output);
   var output=wordLength("Developer");
   console.log(output);
   var output=wordLength("Google");
   console.log(output);



