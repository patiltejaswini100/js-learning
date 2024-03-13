
function stringHandsOn() {
    var print = "   Hey you are doing good, keep it up   ";
console.log(`Step-1: Print:${print}`);

console.log(`Step-2: Length: ${print.length}`);

var greet = "   Hey you are doing good, keep it up   ";
var greetAfterTrim = greet.trim();
console.log(`Step-3: Trim string:${greetAfterTrim}  `);
console.log(`Step-4: Total number of extra spaces count that is removed : ${greet.length-greetAfterTrim.length}`);


console.log(`Step-5: First Character after trim: ${greetAfterTrim.charAt(0)},Last Character after trim: ${greetAfterTrim.charAt(33)}`);

var split=greetAfterTrim.split(" ");
console.log(`Step-6: Total number of words after trim : ${greetAfterTrim.split(" ").length}`);

console.log(`Step-7: Index of word "good" : ${greetAfterTrim.indexOf("good")}`);

console.log(`Step-8: substring starting from index 22 : ${greetAfterTrim.substring(22,33)}`);

console.log(`Step-9: String ends with word "up" : ${greetAfterTrim.includes("up")}`);

console.log(`Step-10: String starts with word "Hey" : ${greetAfterTrim.includes("Hey")}`);


}stringHandsOn()

