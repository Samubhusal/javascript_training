

//SYMBOL
// let MySymbol =Symbol('abc');
// console.log(MySymbol); //used to generate unique key(in object),will cover later
// console.log(typeof MySymbol);

//NULL (NO VALUE)
let MyNullVariable = null;
console.log(MyNullVariable);
console.log(typeof MyNullVariable); //object//(BIGGEST BUG IN JS WORLD)

//TYPE CONVERSATIONS
let myNumber = '10';
console.log(myNumber + 10); //+ is a operator polymorphism (poly->many) (morph->from)
let MyconvertedNumber = Number(myNumber);
console.log(MyconvertedNumber + 10);

//SOME TWEAKS (EDGE CASES) WHILE CONVERTING TO NUMBER TYPE
let myTrust = Number('10');  // put'10' 10 '10b' true false check true/false=infinity
//   -true/false=-infinity (if there is string then the value will be Nan)
console.log(myTrust);

//number('n10') Nah

//BOOLEAN **imp**

//string case
let myBoolean = Boolean('');//if there is only string but there is no any value then there comes false , otherwise any value put then true like  true,"true" ,a,c,
console.log(myBoolean);


//NUMBER CASE
let myNumberBoolean = Boolean(0.0);   //eg=1,0.0,1.0,0
console.log(myNumberBoolean);     //nonzero value->true ,zero->false

//CONVERSION TO STRING TYPE FROM DIFFERENT OTHER TYPE 

let myStringValue = String('samikshya');//all value is possible but big int not
console.log(myStringValue);

//PRACTICE PROBLEMS
// console.log(true+1);

//Type COERTION
console.log('100' - 20);
console.log('100' + 200);


console.log(-+-10);
console.log("abc" + true * 2);
console.log("äbc" + null - true + false);
console.log('20' - 10 + 200 - "30");
console.log('abc' + false * 2);

let positiveNumber = prompt('Enter any positive number');
let convertedData = Number(positiveNumber);
console.log("Your positive number is", convertedData);

let nNumber = -1 * convertedData;


console.log("Your Negative Number is: ", nNumber);

//take birth year like (2004/2005) from user
//output the actual age of the user like (18/19) AND so on


let userDob = Number(prompt("Enter your birth year"));
console.log(2025 - userDob);



// let lengthNumber=Number(prompt("Enter any length"));
// let breadthNumber= Number(prompt("enter any breadth"));
// let heightNumber=Number(prompt("Enter you height"));
// let area=lengthNumber*breadthNumber*heightNumber;
// console.log(area);

let userdiameter = Number(prompt('Enter your daimeter of circle'));
radius = userdiameter / 2;
let Pi = 3.14;
let area = Pi * radius ^ 2;
console.log(area);
let perimeter = 2 * Pi * radius;
console.log(perimeter);








