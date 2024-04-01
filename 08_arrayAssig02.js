
console.log(`====================Step-1========================`);
const arrayNumber = [20,31,40,25,23,11,29,9,60,2,11]
console.log(arrayNumber);
console.log(`Length of Array: ${arrayNumber.length}`);

console.log(`====================Step-2========================`);
console.log("First Element:", arrayNumber[0]);
console.log("Last Element:", arrayNumber[arrayNumber.length-1]);

console.log(`====================Step-3========================`);
console.log("Third Last Element:", arrayNumber[arrayNumber.length-3]);

console.log(`====================Step-4========================`);
function evenNumbers(arg){
    const evenNumbers = [];
    for (const number of arg) {
     if (number % 2 === 0) {
         evenNumbers.push(number);
     }
    }
    return evenNumbers;
 }
 const findEvenNumbers = evenNumbers(arrayNumber);
 console.log(`Even numbers in the given Array [20,31,40,25,23,11,29,9,60,2,11] is :${findEvenNumbers}`);
 
console.log(`====================Step-5========================`);
function oddNumbers(array) {
    const oddNumbers = [];
    for (const Number of array) {
        if (Number % 2 !== 0) {
            oddNumbers.push(Number);
        }
    }
    return oddNumbers;
}
const findOddNumbers = oddNumbers(arrayNumber);
console.log("Step 5 :- Odd numbers in the given Array [20,31,40,25,23,11,29,9,60,2,11] is :",findOddNumbers);


console.log(`====================Step-6========================`);
console.log(`Even positioned Array from the Given Array [20,31,40,25,23,11,29,9,60,2,11] are :${findEvenNumbers}`);
let sum1 = 0;
for (const element of findEvenNumbers) {
    sum1 = sum1 + element;
}
console.log(`Sum of Even positioned Array is :${sum1}`);

console.log(`====================Step-7========================`);
console.log(`Odd positioned Array from the given Array [20,31,40,25,23,11,29,9,60,2,11] are :${findOddNumbers}`);
let add = 0;
for (const element of findOddNumbers) {
    add = add + element;
}
console.log(`Sum of Odd positioned Array is : ${add}`);

console.log(`====================Step-8========================`);
let addition = 0;
console.log(`Given Array Numbers are ${arrayNumber}`);
for (const element of arrayNumber) {
    addition = addition + element;
}
console.log(`Sum of all the given Array numbers is :${addition}`);


console.log(`====================Step-9========================`);
let multiplication = [];
for (const element of arrayNumber) {
    if (element%5===0) {
        multiplication.push(element)
    }
}
console.log(`Numbers which are multiple by 5: ${multiplication}`);

console.log(`====================Step-10========================`);
const availableNumber = 115;
let isAvailable = false;
for (const element of arrayNumber) {
    if (element === availableNumber) {
        isAvailable = true;
        break;
    }
}
if (isAvailable) {
    console.log(`Number ${availableNumber} is Available in Given Array`);
} else {
    console.log(`Number ${availableNumber} is Not Available in Given Array`);
}

console.log(`====================Step-11========================`);
console.log(`Given Array Numbers are ${arrayNumber}`);
const targetNumber = 23;
let numberAvailable = false;
for (const number of arrayNumber) {
    if (number === targetNumber) {
        numberAvailable = true;
        break;
    }
}
if (numberAvailable) {
    console.log(`Number ${targetNumber} is Available in the Given Array`);
} else {
    console.log(`Number ${targetNumber} is Not Available in the Given Array`);
}


console.log(`====================Step-12========================`);
console.log(`Given Array Numbers are: ${arrayNumber}`);
arrayNumber.splice(3,0,55,66);
console.log("Inserted new numbers new Array list is :");
console.log(arrayNumber);

console.log(`====================Step-13========================`);
console.log(`Given Array Numbers are ${arrayNumber}`);
var deleteElements = arrayNumber.splice(4,3);
console.log("Deleted Elements are :",deleteElements);
console.log("Deleted 3 elements starting from index 4 :",arrayNumber);