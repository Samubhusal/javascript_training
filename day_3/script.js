// data type in javascript

// string
// number, integer, float
// boolean
// Big Int
// null(NO VALUE)
// symbol
// undefined(no value)

// collection of valueable information (partially true)
// data is anything that can be recorded and capture
// data+some processing= Information

// data type->describes what type  of data we are recording

// 1)String

// Sting is combination of characters, wrapped by single or double quotes(''OR"")
// let myName='samikshya';
// let myLastname='bhusal';  
//let myNumber=9876543210;

// typeof (gives what type of value variable holds)
// console.log(typeof myName);
// console.log(typeof myNumber);

// 2)NUMBER (FLOAT ->1.2, 1.3)
// Integer->100,200

 let number= 100 ;   //  (more generic data type->number)
console.log(typeof number);

// console.log(0.1+0.2);

// 000
// 111
// 000 //1

// let mynumber=9007199254740991;  //max
// console.log(mynumber);

// let myMinimumNumber= -9007199254740991; //min
// console.log(myMinimumNumber);

// let myBinary= 0b0111;
// console.log(myBinary);

// let myOctal= 0O100;
// console.log(myOctal);

// let myHexadecimal=0xd;
// console.log(myHexadecimal);

// 3) BIG INI
let myBigInt=1000n;
console.log(myBigInt);

let myAnotherBigInt= 10000n;
console.log(typeof myAnotherBigInt); //string,bigint,number

// console.log(10n +10); error (both type is must be same)

// 4)BOOLEAN

//either yes or no ,true or false ,0 or 1
let isMarried=true;
let canvote=false;
console.log(isMarried);
console.log(canvote);

let myVariable;
console.log(myVariable); //returns undefined (value is not defined)







