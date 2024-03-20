
var word = "JavaScript";
for (let index = 0; index < word.length; index++) {
    var element = word.charAt(index);
    console.log(element);
    
}

console.log(`==== WAP to count the char a ===`);
var word = "JavaScript";
var count = 0;
for (let index = 0; index<word.length; index++) {
    var char = word.charAt(index);
    if (char=='a') {
        count = count+1;
    }  
}console.log(count);

console.log(`==== Reverse of words ===`);
var str="tejaswini";
for (let i = str.length-1; i>=0; i--) {
    console.log(str.charAt(i));  
}
var word = "JavaScript";
for (let index = word.length; index>=0; index--) {
    var element = word.charAt(index);
    console.log(element);
}