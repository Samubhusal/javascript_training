//-------------------OPERATOR PRECEDENCE AND ASSOSIATIVITY------------------------
console.log(10+40/2);//(OPERATOR PRECEDENCE AND ASSOSIATIVITY TABLE)
console.log(4*[5/100]);

myVar=10;
myVar=myVar+1 +myVar++;

//1 0 0
//0 1 0
//-----
//1 1 0=>6

//unary operator (only one)
//myVar++

console.log(2<<3||true && false);
console.log(2<<3 || 5+2 - (true-false));
console.log(true || false&& true);

//---------------------CONDITIONAL STATEMENT-------------------------------------
//TERNARY: CONDITION ? WHAT IF TRUE :IF FALSE 

//IF ELSE
//for loop
//while loop
//do while loop (3+ more after we complete array session...)

// const userAge=Number(prompt('Enter your age'));
// if(userAge>=18){
//     console.log('you are eligible for voting');
// } else{
//     console.log('you are too early to vote');
// }

// const  userFirstNumber=Number(prompt('Enter your first number'));
// const userSecondNumber=Number(prompt('Enter your last number'));
// if(userFirstNumber>=userSecondNumber){
//     console.log('first number is smaller');
// }else{
//     console.log("number is not smaller");
// }

// const firstNumber=Number(prompt('Enter your 1number'));
// if(firstNumber%5==0){
//     console.log('divisible by 5');
// }else{
//     console.log('not divisible by 5');
// }
 
// let bagPrice=Number(prompt('Enter your 1price'));
// let bigDeal=Number(prompt('Enter your 2price'));
// let ccc=Number(prompt('Enter your 3price'));
// let ddd=Number (prompt('Enter your 4price'));
// let eee=Number(prompt('Enter your 5price'));
// let priceNumber=bagPrice+bigDeal+ccc+ddd+eee;
// if(priceNumber>1000){
//     console.log('price with discount');
// }else{
//     console.log('price without disconut');
// }


//weekend
// const inputUser=prompt('Enter your weekend day ');
// if(inputUser=='Saturday'|| inputUser=='sunday'){
//     console.log("a day is weekend" );
// }else{
//     console.log('a day is not an weekend');
// }

//24 hours
// const inputTime=Number(prompt('Enter your time'));
// if(inputTime>=12){
//     console.log('it is a pm');
// }else{
//     console.log('it is a am');
// }

// let weight=Number(prompt('Enter your weight'));
// let height=Number(prompt('Enter your height'));
// let result=weight/height*height;
// if(result<=60){
//     console.log("okiee");
// }else{
//     console.log('not okiee');
// }

const specialChar = prompt('Enter your symbol');
if(specialChar=="!"||specialChar=="@"||specialChar=="#"||specialChar=="$"||specialChar=="%"||specialChar=="^"||specialChar=="&"||specialChar=="*"||specialChar=="("||specialChar==")"){
    console.log('correct');
}else{
    console.log('incorrect');
}




 