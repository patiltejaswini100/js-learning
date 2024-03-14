console.log("=========================Step-1=======================");

function squareOfWordLength(arg) {
    
console.log(`Length of word:${arg.length}`);

exponential = arg.length ** 2 
console.log(`length Square:${exponential}`);


return squareOfWordLength
}
squareOfWordLength("JavaScript");
squareOfWordLength("Google Chrome");
squareOfWordLength("Developer Smart")

console.log("=========================Step-2=======================");

function string() {

    var sentence="I am Angular Developer";
    console.log(`length of sentence:${sentence.length}`);
    console.log(`Total no. of words in sentence:${sentence.split(" ").length}`);

    var result1 = sentence.length / sentence.split(" ").length
    console.log(`Division of string length and total no. of words = ${result1}`);

    var result2 = sentence.length * sentence.split(" ").length;
    console.log(`Multiplication of string length and total no. of words = ${result2}`);
    
}string()