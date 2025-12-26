//--------------------ASSIGNMENT OPERATORS--------------------------------------
let first =10;
const SECOND=10;

//SHORTHAND OPERATOR
// let a=b=c=d=e=5;
// console.log(e);

//-------------------------COMPOUND OPERATORS---------------------------------
// let myvar=10;
// console.log((myvar+= 40)) //equivalent to myvar =myvar +40

//myvar -= 5

// let myUSD=Number(prompt("Enter your number"));
// console.log(myUSD*=136.47);

// let myFirstNumber=Number(prompt('Enter your number'));
// let mySecondNumber=Number(prompt('Enter your number'));
// console.log(myFirstNumber+=mySecondNumber); //add
// console.log(myFirstNumber-=mySecondNumber);  //sub
// console.log(myFirstNumber*=mySecondNumber);   //multi
// console.log(myFirstNumber/=mySecondNumber);  //div

// a=b=c=d=Number(prompt('enter your number'));
// A=B=C=D=Number(prompt('enter your number'));
// console.log(a+=A);
// console.log(b-=B);
// console.log(c*=C);
// console.log(d/=D);

//--------------------------INCREMENT/DECREMENT OPERATOR-----------------------------------
//fornt ma ++ hunda preincrement condition hunxa tara second variable ma add gara paxi matra store hunxa
//back ma ++ postincrement hunxa tara second variable ma add na hundai store hunxa
let myVariable=25;
let mysecondValue=myVariable++;
console.log(myVariable);
console.log(mysecondValue);

let myVariable1=25;
let mysecondValue1=++myVariable1;
console.log(myVariable1);
console.log(mysecondValue1);

let myNumber=20;
let mySecondNumber=100;
let myResult= ++myNumber +myNumber-- + mySecondNumber--  -  --mySecondNumber; 
//++mynumber +myNumber--+ mySecondNumber+ ++mySecondNumber=143
console.log(myResult);