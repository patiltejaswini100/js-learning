console.log("Step-1.Create the object → bankSbi using literals with at least 4 properties");



const bankSbi = {
    accountNumber : 1234567891,
    branchName : "Hinjewadi",
    address : "Laxmi chowk, Hinjewadi",
    IFSC : "SBI-Hinjewadi"

}
console.table(bankSbi);

console.log("Step-2.Create the object → ‘bankLocation’ using literals with properties: street, city, pin");
const bankLocation ={
    street : "Hinjewadi",
    city : "Pune",
    pin : 411057,
}
console.table(bankLocation);

console.log("Step-3.Clone the step 1 ( bankSbi ) and step 2 ( bankLocation ) objects using Object.assign( )");
const cloneObject = Object.assign({},bankSbi,bankLocation);
console.table(cloneObject);

console.log("Step-4.Create the object using object literals → rateOfInterest with properties-homeLoanInterest, personalLoanInterest, dueInterest");


const rateOfInterest = {
    homeLoanInterest : "8%",
    personalLoanInterest : "12%",
    dueInterest : "13%"

}
console.log(rateOfInterest);

console.log("Step-5.Merge the step 1, step 2 and step 4 objects into new object namely → sbiDetails");
const sbiDetails = Object.assign({}, bankSbi, bankLocation, rateOfInterest)
console.table(sbiDetails);

console.log("Step-6.Traverse this merged object - step 5 using for in loop");
for (const key in sbiDetails) {
    console.log(`${key}=> ${sbiDetails[key]}`);
}

