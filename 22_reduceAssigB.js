class Employee {
    constructor(emp_id, emp_name, emp_dept, emp_salary, emp_company) {
        this.emp_id = emp_id;
        this.emp_name = emp_name;
        this.emp_dept = emp_dept;
        this.emp_salary = emp_salary;
        this.emp_company = emp_company;
    }
    detail(){
        console.log(`Employee Detail => ID: ${this.emp_id}, Name: ${this.emp_name}, Department: ${this.emp_dept}, Salary: ${this.emp_salary}, Company: ${this.emp_company}`);
}
};
const emp_anil = new Employee(22, "Anil", "IT", 50000, "TCS");
const emp_radha = new Employee(33, "Radha", "HR", 74000, "Wipro");
const emp_rishi = new Employee(55, "Rishi", "Finance", 47000, "TCS");
const emp_sonali = new Employee(66, "Sonali", "Finance", 45000, "Infy");
const emp_monika = new Employee(77, "Monika", "IT", 40000, "Wipro");
const emp_viny = new Employee(88, "Vinayak", "IT", 75000, "TCS");
const emp_mahi = new Employee(99, "Mahesh", "HR", 85000, "Infy");

arrayEmps = [emp_anil, emp_radha, emp_rishi, emp_sonali, emp_monika, emp_viny, emp_mahi];

console.log(`1. Find all the employees from 'Wipro' company `);
const newArray = arrayEmps.filter((element)=>{
    return element.emp_company=="Wipro";
});

newArray.forEach(element => {
    console.log(element);
});

console.log(`-----------------------------------------------------------------------`);
console.log(`2. Find all the employees from 'IT' OR 'HR' dept`);
const arrayDept = arrayEmps.filter((element) => {
    return element.emp_dept=="IT" || element.emp_dept=="HR"
});
arrayDept.forEach(element => {
    console.log(element);
});


console.log(`-----------------------------------------------------------------------`);
console.log(`3. Find all the employees whose emp id's are greater than 50`);
const arrayId=arrayEmps.filter((element) => {
    return element.emp_id > 50
});
arrayId.forEach(element => {
    console.log(element);
});


console.log(`-----------------------------------------------------------------------`);
console.log(`4. Find all the employees whose names start with letter 'A' or 'V' or 'M' `);
const arrayName=arrayEmps.filter((element) => {
    return element.emp_name.startsWith("A") || element.emp_name.startsWith("V") || element.emp_name.startsWith("M")
});
arrayName.forEach(element => {
    console.log(element);
});


console.log(`-----------------------------------------------------------------------`);
console.log(`5. Find the average salary of the employee for all the department `);
const sumSalary = arrayEmps.reduce( (runningTotal, currentValue)=>{
        return runningTotal+currentValue.emp_salary;
    }, 0 );
    console.log(`Total Salary :${sumSalary}`);
    console.log(`Average salary : ${sumSalary/arrayEmps.length}`);


    console.log(`-----------------------------------------------------------------------`);
console.log(`6. Find the average salary for 'IT' department`);
const arrayAvgIT = arrayEmps.filter((emp)=>{
    return emp.emp_dept=="IT";
});

const sumSalaryIT = arrayAvgIT.reduce( (runningTotal, currentValue)=>{
    return runningTotal+currentValue.emp_salary;
}, 0 );

console.log(`Average salary from IT department is: ${sumSalaryIT/arrayAvgIT.length}`);