//raw this points to current object
//(){}this points to current object

// let myobject={
//     dob:2005,
//     age(){
//         console.log(2025-this.dob);
//     },
// };
// console.log(myobject);
// myobject.age();


// let myObject={
//     name:'samikshya',
//     lastname:'bhusal',
//     //method to print name like :my name is samikshya bhusal
//     names(){
//         // console.log(this.name,myname is:this.lastname);
//     }
// }

let myAnotherObject={
    name:'suman bhusal',
    printName(){
        console.log('my name is' +this.name);
    },

}
myAnotherObject.name="suman pandey",
myAnotherObject.printName();

//wap to calculate area
//first declare length and breadth as 100,200
//print area
//change the length and breadth to 10 and 20

let calculateArea={
    length:100,
    breadth:200,
    area(){
        console.log(this.length*this.breadth);
    },
    printArea(){
        console.log('area is' +this.area());
    },
};
calculateArea.printArea();

calculateArea.length=10;
calculateArea.breadth=20;
calculateArea.printArea();

calculateArea.length=0;
calculateArea.breadth=10;
calculateArea.printArea();

//wap to input your all possible personal details
//create all methods to print all of them separately
//like printName prints name
//printaddres prints address

let myDetails={
    name:'samikshya bhusal',
    age:20,
    gender:'female',
    
}