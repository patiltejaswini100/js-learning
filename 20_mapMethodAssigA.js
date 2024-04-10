console.log("========================================Step-1==================================");
const arrayNumbers = [20, 11, 40, 25, 11, 9,31, 60, 2, 19];
let arrayTransform = [];
arrayNumbers.forEach(element => {
    arrayTransform.push(element+10)
});
console.log(`Orignal array : [${arrayNumbers}]`);
console.log(`Addition of element by adding 10 : [${arrayTransform}]`);

console.log("========================================Step-2==================================");


const arrayCube=arrayNumbers.map(element => {
    return element*element*element
});
console.log(`Cube of element in array : [${arrayCube}]`);

console.log("========================================Step-3==================================");
const arrayNew = arrayNumbers.map( (element, index)=> element +index);
{
   console.log(`Result of element by adding index : [${arrayNew}]`);
} 