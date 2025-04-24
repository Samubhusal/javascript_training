console.log("my world");

//SYMBOL
let MySymbol =Symbol('abc');
console.log(MySymbol); //used to generate unique key(in object),will cover later
console.log(typeof MySymbol);

//NULL (NO VALUE)
let MyNullVariable=null;
console.log(MyNullVariable);
console.log(typeof MyNullVariable); //(BIGGEST BUG IN JS WORLD)

//TYPE CONVERSTIONS
let myNumber='10';           
console.log(myNumber + 10); //+ is a operator polymorphism (poly->many) (morph->from)
let MyconvertedNumber=Number(myNumber);
console.log(MyconvertedNumber + 10);

//SOME TWEAKS (EDGE CASES) WHILE CONVERTING TO NUMBER TYPE
let myTrust= Number('24');  // put'10' 10 '10b' true false check true/false=infinity
//   -true/false=-infinity (if there is string then the value will be Nan)
console.log(myTrust);  

//number('n10') Nah

//BOOLEAN **imp**

//string case
let myBoolean=Boolean ('');//if there is only string but there is no any value then there comes false , otherwise any value put then true like  true,"true" ,a,c,
console.log(myBoolean);
 

//NUMBER CASE
let myNumberBoolean=Boolean(0.1);   //eg=1,0.0,1.0,0
console.log(myNumberBoolean);     //nonzero value->true ,zero->false

//CONVERSION TO STRING TYPE FROM DIFFERENT OTHER TYPE 

let myStringValue= String('samikshya');//all value is possible but big int not
console.log(myStringValue);

//PRACTICE PROBLEMS
// console.log(true+1);

//Type COERTION
console.log('100' - 20);
console.log('100' + 200);




