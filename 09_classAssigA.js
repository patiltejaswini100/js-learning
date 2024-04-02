console.log("=============================Step-1============================");

class Vehicle {
    constructor(name, color, typeOfVehicle, numberOfVehicle, company){
this.name= name;
this.color = color;
this.typeOfVehicle = typeOfVehicle;
this.numberOfVehicle = numberOfVehicle;
this.company = company
    }
    detail(){
        console.log("----------------------------------------------------")
        console.log("Vehicle Details => ");
        console.log(`Name: ${this.name}`);
        console.log(`Color: ${this.color}`);
        console.log(`Type Of Vehicle: ${this.typeOfVehicle}`);
        console.log(`Number Of Vehicle: ${this.numberOfVehicle}`);
        console.log(`Company: ${this.company}`);
    }
}
const kiaSeltos = new Vehicle("Kia seltos", "black", "Car", 2095, "Kia India" );
kiaSeltos.detail();

const creta = new Vehicle("Creta", "black", "Car", 3095, "Hyundai" );
creta.detail();

const thar = new Vehicle("Thar", "black", "Car", 4095, "Mahindra and Mahindra" );
thar.detail();

const activa = new Vehicle("Activa", "Grey", "Scooty", 5095, "Honda" );
activa.detail();

const pulsar = new Vehicle("Pulsar", "Grey", "Bike", 6095, "Bajaj" );
pulsar.detail();


console.log("=============================Step-2============================");

class College{
    constructor(name, city, type, university){
        this.name = name;
        this.city = city;
        this.type = type;
        this.university = university;
    }
    display(){
        console.log(`College Details => Name: ${this.name}, City: ${this.city}, Type of College: ${this.type}, University: ${this.university}`);
    }
}
const rcpit = new College("RCPIT", "Shirpur", "Autonomous", "KBCNMU");
rcpit.display();

const coep = new College("COEP", "Pune", "Government", "SPPU");
coep.display();

const kthm = new College("KTHM", "Nashik", "Government", "SPPU");
kthm.display();

const mit = new College("MIT", "Pune", "Autonomous", "SPPU");
mit.display();

