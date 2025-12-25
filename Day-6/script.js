//STRING INTERPOLATION 

let myNullVariable=('Shyam said "if there is one thing i hate its people who smoke !"');
console.log(myNullVariable);
 
let myVariable=`JONNY JONNY YES PAPA  
EATING SUGAR YES PAPA
TELLING LIE NO PAPA
OPEN YOUR MOUTH HAHAHA!!`;
console.log(myVariable);

//"`"backtick is used for multi line string
// let firstName=prompt('Enter your firstName');
// let lastName=prompt('Enter your lastName');
// let Email=prompt("Enter your Email");
// console.log(`My name is ${firstName} ${lastName} .My Email is ${Email}`);
// //concatenation(+),STRING INTERPOLATION($)

//BMI CALCULATOR (BODY MASS INDEX)
// let bodyWeight=prompt('Enter your weight');
// let bodyHeight=prompt('Enter your height');
// console.log(bodyWeight/bodyHeight^2);

// let unitConverted=prompt('Enter your nepali currency');
// let us=136.67;
// console.log(unitConverted/us);

let nepaliCurrency=Number(prompt('Enter your nepali currency'));
let USD=136;  //united states.
let CNY=19.00;   //china.
let BIN=1.60;   //bhutan
let BDT=1.16;    //bangladesh.
let INR=1.60;  //india.
let MMK=0.064;  //myanmakyat.
let LKR=0.36;  //sirlankan.
let JPY=0.92;    //japanese yen.
let KRW=0.10;   //korean won 
let EUR=0.0067; //eurozone
let PAR=0.46;  //pakistan
// console.log(`According to today's ${exchangeRate} is equal to ${exchangeRate/INR}INDIA`);
// console.log(`According to today's ${exchangeRate} is equal to ${exchangeRate/USD}USD`);
// console.log(`According to today's ${exchangeRate} is equal to ${exchangeRate/CNY}BHUTAN`);
console.log("The currency in USD is", (nepaliCurrency/USD).toFixed(2));
console.log("The currency in CHINA is", (nepaliCurrency/CNY).toFixed(2));
console.log("The currency in INDIA is", (nepaliCurrency/INR).toFixed(2));
console.log("The currency in PAKISTAN is", (nepaliCurrency/PAR).toFixed(2));
console.log("The currency in JAPAN is", (nepaliCurrency/JPY).toFixed(2));
console.log("The currency in BANGLADESH is", (nepaliCurrency/BDT).toFixed(2));
console.log("The currency in SRILANKA is", (nepaliCurrency/LKR).toFixed(2));
console.log("The currency in MAYANMAR is", (nepaliCurrency/MMK).toFixed(2));
console.log("The currency in BHUTAN is", (nepaliCurrency/BIN).toFixed(2));
console.log("The currency in KOREAN is", (nepaliCurrency/KRW).toFixed(2));
console.log("The currency in EUROZONE is", (nepaliCurrency/EUR).toFixed(2));
let AUD=0.0115;  //australia
let CAD=0.0103;  //canada
let NZD=0.013;  //newzealand
let MYR=0.032;  //malaysia
let SGD=0.0104; //singapore
let THL=0.27;   //THAILAND
let IDR=113.32;  //indonesia
let SAR=0.028;  //SAUDI ARABIA
let QAR=0.027;  //qatar
let THB=4.04;   //thaibaht
console.log("The currency in AUSTRALIA is", (nepaliCurrency/AUD).toFixed(2));
console.log("The currency in CANDA is", (nepaliCurrency/CAD).toFixed(2));
console.log("The currency in NEWZEALAND is", (nepaliCurrency/NZD).toFixed(2));
console.log("The currency in MALAYSIA is", (nepaliCurrency/MYR).toFixed(2));
console.log("The currency in SINGAPORE is", (nepaliCurrency/SGD).toFixed(2));
console.log("The currency in THAILAND is", (nepaliCurrency/THL).toFixed(2));
console.log("The currency in INDONESIA is", (nepaliCurrency/IDR).toFixed(2));
console.log("The currency in SAUDIARABIA is", (nepaliCurrency/SAR).toFixed(2));
console.log("The currency in QATAR is", (nepaliCurrency/QAR).toFixed(2));
console.log("The Currency in THAIBHAT is" , (nepaliCurrency/THB).toFixed(2));







