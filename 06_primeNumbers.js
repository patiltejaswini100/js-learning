function isPrime(num){

    for (let index = 2; index < num; index++) {
   
      if (num%index==0) {
   
       return false;
   
      } 
   
    }
   
    return true;
   
   }
   
   const result = isPrime(7);
   
   console.log(`Is 7 Prime Number : ${result}`);
   
    
   
   const result1 = isPrime(9);
   
   console.log(`Is 9 Prime Number : ${result1}`);

   
   // Function to check if a number is prime
console.log("========== Step 1 ===========");
console.log(`Count Prime Number In Array{3,9,7,6,19,29,53}`);
const prime = num => {
  for (let i = 2, s = Math.sqrt(num); i <= s; i++)
    if (num % i === 0) return false; 
  return num > 1;
}

// Function to count prime numbers in an array
const countPrimes = array => array.filter(prime).length;

// Test array
const array = [3, 9, 7, 6, 19, 29, 53];

// Counting prime numbers in the array
console.log(`There are ${countPrimes(array)} prime numbers in the array`);

console.log("========== Step 2 ===========");
// Function to count spaces in a string
const spaceCount = str => (str.match(/ /g) || []).length;

// Test strings
const string1 = "Revision is the mother of success";
const string2 = "Java Script is the language of internate world";

// Counting spaces in the strings
console.log(`There are ${spaceCount(string1)} spaces in the first string`);
console.log(`There are ${spaceCount(string2)} spaces in the second string`);