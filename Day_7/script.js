let convertToF=Number(prompt("Enter Faherneheit in celsius"));
let Faherneheit=(convertToF*9/5)+32;
console.log(Faherneheit);
let KELVIN=convertToF+273.15;
console.log(KELVIN);

//OPERATOR

//ARITHMETIC OPERATOR
//LOGICAL OPERATOR
//TYPE OF OPERATOR
//RELATIONAL OPERATOR
// TERNARY OPERATOR
//BITWISE OPERATION

//-------------------ARITHMETIC OPERATOR-------------------------------------//
//3+2 3 AND2 OPERANDS
//MATHEMATICAL OPERATIORS
//+,-,/,*,%

console.log(20+20);
console.log(20-20);
console.log(20/2);
console.log(10*2);
console.log(3 % 2);  //%OR MODULUS REMAINDER

console.log(2%2);
console.log(9999 %2);
console.log(40 % 2);

//----------------------------logical operator-------------------------------//
//and,or,not
console.log(0+ 1 && false);  //false
console.log(0- 1 && true); //true
console.log("abc" ||" " || true);//abc
console.log(true && " " && "");//blank
console.log("" || ""); //blank
console.log(true ||false && true && "abc" || false);//true  
console.log(null || undefined);//undefined false//false
console.log(undefined ||false);//false
console.log(null && true);//null
console.log(null || true || false);//true  //shot circuit

//---------------------------RELATIONAL/COMPARISION OPERATOR-----------------------------------//relation between one number
//< ,> ,<= ,>= ,!= ,== ,===

// console.log(10<20); //true
// console.log(10>20);   //false
// console.log(10 >= 20);//true

// console.log('10' == 10); //true (perform type coercion)loose equal
// console.log('10'===10);  //false (doesnot perform type coercion and returns true only if the values and type are identical)they are strict equals

let myVariable=Number(prompt("Enter your number"));
let compare=(myVariable >=20);
console.log(compare);

//kilometer to feet
let myInput=Number(prompt('Enter your kilometers number'));
console.log(myInput*3280.8);

//kilometer to meters
console.log(myInput*1000);

//kilometer to inches
console.log(myInput*39370);

//kilometer to cm
console.log(myInput*100000);

//kilometer to yards
console.log(myInput*1093.6);

//kilometer to miles
console.log(myInput*0.62137);

