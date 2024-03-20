console.log("==============================1===============================");

const word = "I am very good IT Developer";
const vowels = "aeiou";
let vowelsCount = 0;
for (let index = 0; index < word.length; index++) {
    let char = word.charAt(index);
    let lowercase = char.toLowerCase();
    if (vowels.includes(lowercase)) {
        vowelsCount++
    }
    
}
console.log(`Total number of vowels including small ang capital vowels: ${vowelsCount}`);

console.log("==============================2===============================");

let sum = 0;
for (let index = 0; index <= 5; index++) {
    sum = sum + index * index * index;
    
}console.log(`Sum of cube of numbers from 1 to 5: ${sum}`);

console.log("===========3-Odd position characters do not consider empty spaces==========");
console.log("===========string-1==>Hard work always pays back========");

function oddPositionChars(arg) {
    for (let index = 0; index < arg.length; index++) {
        const element = arg.charAt(index);
        if (index%2 != 0 && element != " ") {
            console.log(element);
        }
    }
}
oddPositionChars("Hard work always pays back");
console.log("===========string-2==>Soon I will be UI IT champ==========");
oddPositionChars("Soon I will be UI IT champ");