
const fruits_seasonal = ["Banana", "Orange", "Apple", "Mango", "Water Melon"];
console.log(fruits_seasonal);
console.log("===================================Step-1================================");
console.log("First element:", fruits_seasonal[0]);
console.log("Last element:", fruits_seasonal[fruits_seasonal.length - 1]);

console.log("===================================Step-2================================");
fruits_seasonal.unshift("Papaya");
console.log(`Added element Papaya before element Banana :`);
console.log(fruits_seasonal);


console.log("===================================Step-3================================");
const deleteElement=fruits_seasonal.splice(4,1);
console.log(`Removed ${deleteElement} from the array:`);
console.log(fruits_seasonal);

console.log("===================================Step-4================================");
fruits_seasonal.push("Pineapple");
console.log(`Added element Pineapple in the array:`);
console.log(fruits_seasonal);

console.log("===================================Step-5================================");
const addElement =fruits_seasonal.splice(4,0,"Dragon fruit");
console.log(`Added element ${addElement} before watermelon in the array:`);
console.log(fruits_seasonal);

console.log("===================================Step-6================================");
fruits_seasonal[2] = "Kiwi";
console.log(`Replaced element orange with kiwi in the array:`);
console.log(fruits_seasonal);

console.log("===================================Step-7================================");
const x=fruits_seasonal.slice(1,5);
console.log(`logged element starting with index 1 to 4 in the array:${x}`);

console.log("===================================Step-8================================");
const xl=fruits_seasonal.slice([fruits_seasonal.length - 3]);
console.log(`Only selected last three elements in the array:${xl}`);
