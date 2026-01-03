// class person{//class is combination of property and behaviour
//     personName;
//     personAddress;
//     personPhone;

//     constructor(personName,personAddress,personPhone){
//         this.personName=personName;
//         this.personAddress=personAddress;
//         this.personPhone=personPhone;
//     }
//     walk(){
//         console.log(`${this.personName}walk`);
//     }
//     dance(){
//         console.log(`${this.personName}`);
//     }
// }
// let person1=new person('samikshya','nepal','2345');
// let person2=new person('anisha','india','2346');

// console.log(person1.personName);
// console.log(person2.personAddress);
// person1.walk();
// person2.walk();
// person1.dance();
// person2.dance();

// //FOUR PILLARS OF OOP

// //ENCAPSULATION ->BIND PROPERTY AND BEHAVIOUR TOGETHER IN ONE OBJECT
// //ABSTRACTION ->HIDE UNNECESSARY COMPLEXITY
// //POLYMORPHIS ->SAME FUNCTIONALITY WITH DIFFERENT IMPLEMENTATION
// //INHERITENCE -> RESUE CODE AND MAK IT MORE EFFICIENT


// //ENCAPSULATION
// class Engine {
//     #engineNumber;
//     #engineRPM;
//     //private property cannot be accessed outside class/only accessible with in the class

//     constructor(engineNumber,engineRPM){
//         this.#engineNumber=engineNumber;
//         this.#engineRPM=engineRPM;
//     }
//     //getter method
//     getEngineNumber(){
//         return this.#engineNumber;
//     }
// }
// const engine=new Engine('mdb34',343);
// console.log(engine.getEngineNumber());


// create class animal
//include public property color, hasfur and breed
// include private property heart and lungs
// include method getAnimalDetails()that prints public property in nicer format
//include breathe and pump method ,use private property heart and lungs for that

class Animal{
    Color;
    Hasfur;
    Breed;
    #heart;
    #lungs;

    constructor(Color,Hasfur,Breed,heart,lungs){
        this.Color=Color;
        this.Hasfur=Hasfur;
        this.Breed=Breed;
        this.#heart=heart;
        this.#lungs=lungs;
    }
    getAnimalDetails(){
     
      console.log(`Animal color is ${this.Color},its fur is ${this.Hasfur} ,finally its breed is ${this.Breed}`);
    }
    breathe(){
        console.log(`${this.#lungs} is being used to breathe`);
    }
    pump(){
        console.log(`${this.#heart}is pumping`);
    }
}
const animal1 = new Animal('Brown',true,'Labrador',1,2);
animal1.getAnimalDetails();
animal1.breathe();
animal1.pump();
