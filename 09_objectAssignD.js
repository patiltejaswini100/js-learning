let professor = {

    Name : "Shreyas",
    City : "Pune",
    Education : "ME-IT",
    Age : 35, 
    Specialization : "Java",
    Degree : {
        engineering:"CSC",
        PHD:"ADV Computing",
},
certificates: ["Hacker Rank Participation","Certificate in IFE course", "Certificate in Adv Programming"]
}
console.log("===============Add minimum 5 properties============");
console.log(professor);

console.log("===============Also include nested object 'degree'============");
console.log(professor.Degree);

console.log("===============Also add one array ============");
console.log(professor.certificates);

professor.totalExperience = "14 years";
console.log("===============Try to add new properties============");
console.log(professor.totalExperience);

console.log("===============Add one new certificate at the 2nd index============");
professor.certificates.splice(2,0,"Oracle Certificate");
console.log(professor.certificates);

let length = professor.certificates.length;
console.log(`The last element of the array: ${professor.certificates[length-1]}`);

const completeObj = professor;
console.log("===============Complete object ============");
console.log(completeObj);

console.log("===============Traverse Array============");
let array = professor.certificates;
for (let index = 0; index < array.length; index++) {
    const element = array[index];
    console.log(element);
}





