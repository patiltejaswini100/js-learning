const sentence = "I am Angular Web Developer"
const vowels = "aeiou"
let vowelsCount = 0
for (let index = 0; index < sentence.length; index++) {
    let char = sentence.charAt(index);
    let lowercase = char.toLowerCase();
    if (vowels.includes(lowercase)) {
        vowelsCount++
    }
}console.log(vowelsCount);


//const word = "I am very good IT Developer";
//const vowels = "aeiou";
//let vowelsCount = 0;
//for (let index = 0; index < word.length; index++) {
   // let char = word.charAt(index);
   // let lowercase = char.toLowerCase();
   // if (vowels.includes(lowercase)) {
   //     vowelsCount++
   // }
    //}
//console.log(`Total number of vowels including small ang capital vowels: ${vowelsCount}`);