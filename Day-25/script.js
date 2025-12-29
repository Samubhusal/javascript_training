// //-----------------SHALLOW COPY AND DEEP COPY-----

// let number=2;
// let number1=number;
// number1=3;
// console.log(number);
// console.log(number1);

// let person={
//     personName:'rita',
// };

// let anotherperson=person;
// console.log(anotherperson);
// person.personName='shyam';

// console.log(person);
// console.log(anotherperson);

// //--------------------PASS BY VALUE VS PASS BY REFERENCE-----------
// //1)pass by value

// let first=10;
// let second=first;
// first=30;
// console.log(first);
// console.log(second);

// //for special type
// let myFirstObject={
//     personName:'samikshya',
// }
// let myAnotherObject=myFirstObject;
// myFirstObject.personName='shree';

// console.log(myFirstObject);
// console.log(myAnotherObject);

// let dogObject = {
//   animalName: 'Dog',
//   color: 'Shade of black',
// };

// let anotherDog = dogObject; // pass by reference , pass by address
// dogObject.color = 'Red';

// console.log(anotherDog);
// console.log(dogObject);


// let myNestedObject={
//     address:{
//         permanent:'butwal',
//         temporary:'pokhara',
//     },
// };

// let myNestedObjectcopy= structuredClone(myNestedObject);
// myNestedObjectcopy.address.permanent='kathamandu';

// // let myNestedObjectcopy=myNestedObject;
// // myNestedObject.address.permanent='kathmandu';
// console.log(myNestedObjectcopy);
// console.log(myNestedObject);


// //----------------
// let myobject='samikshya';
// let myobjectName=myobject;
// myobject='sandesh';
// console.log(myobject);
// console.log(myobjectName);

//-------------------------------------
// let myNameObject={
//     name:{
//         firstName:'samikshya',
//         lastname:'bhusal',
//     },
// };
// let myNameObjectcopy=structuredClone(myNameObject);
// myNameObjectcopy.name.firstName='sandesh';

// console.log(myNameObjectcopy);
// console.log(myNameObject);


//-------------------------------------
// let anotherPerson={
//     name:{
//         firstName:'samikshya',
//         lastName:'bhusal'
//     },
//     addressName:{
//         temporary:'butwal',
//         permanent:'palpa',
//     },
// };
// let firstvariable=structuredClone(anotherPerson);
// firstvariable.name.firstName='suman';
// firstvariable.name.lastName='pandey';
// let secondvariable=structuredClone(anotherPerson);
// secondvariable.addressName.temporary='pokhara';
// secondvariable.addressName.permanent='kathmandu';
