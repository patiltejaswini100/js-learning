class Student {
    constructor(rollNumber, name, division){
        this.rollNumber  = rollNumber;
        this.name = name;
        this.division = division;
    }
        getDetail(){
            console.log(`Student Details => Rollno: ${this.rollNumber}, Name: ${this.name}, Division: ${this.division}`);
    }

}
const Om = new Student(22, "Om", "A");
Om.getDetail();

const Sai = new Student(23, "Sai", "B");
Sai.getDetail();

const Shiv = new Student(24, "Shiv", "C");
Shiv.getDetail();