console.log(`I am "Software" Developer`);

var city = "Pune";
var firstName = "Gajanan";

//console.log("My name is: ", firstName, " and city is: ", city);

console.log(` My name is: ${firstName} and city is: ${city} `);

console.log("========== replace() ==================");
var greet = "Good Morning";
const afterReplace = greet.replace("Morning", "Afternoon");
console.log(`After replace string is: ${afterReplace}`);

console.log(`========== toUpperCase() ==================`);
var greet = "Good Morning";
var greetInUpperCase = greet.toUpperCase();
console.log(`${greet} in upper case is : ${greetInUpperCase}`);

console.log(`========== trim() ==================`);
var str = "   Trim both the side   "
console.log(str.trim());

console.log(`========== includes() ==================`);
var str = "My name is Tejaswini"
console.log(str.includes("name"));

console.log(`========== slice() ==================`);
var str = "Developers World!";
console.log(str.slice(0, 10));

var greet ="   Good Morning   ";
console.log(` ${greet} it's length is : ${greet.length}`);

var length = greet.length;
console.log(`greet.trim()it's length is : ${greet.length}`);