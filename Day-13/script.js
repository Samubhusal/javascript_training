//Infinite loop
// let attempt=3;
// let pin=1234;
// for( let i= 0; i<attempt; i++){
// //for(;;){
//     let inputPin=prompt('Enter your pin number');
//     if(attempt &&inputPin == pin){
//         console.log('Pin is correct');
//     }else{
//         console.log('pin is incorrect');
//         attempt--;
//     }
//   if(attempt>0 && inputPin!=pin){
//    attempt--;
//     alert("you have entered wrong pin three times");
//     console.log('you have ${attempt}attempt left');
//   }
// }

//---------------------
//while loop
// let i=1;
// let count=5;
// while(i<=10){
//     //console.log(count + "*" +i+"="+("count*i"));
//     console.log(`${count}*${i} =${count*i}`)
//     i++;
// }

//while(true){ infinity
//    console.log("hello world");
//}

//do while loop
// let mycount=4;
// do{
//     console.log(mycount);//4 3 2 1
//     mycount--;
// }while(mycount>0);

// //print 1 to 100 by useing while loop and do while loop
// let userInput=Number(prompt('Enter your number'));
// let userInput1=Number(prompt('Enter your number1'));
// let m=userInput;
// while(m<=userInput1){
//     console.log('m');
//     m++;
// }

// let userInput2=Number(prompt('Enter your number'));
// let userInput3=Number(prompt('Enter your number1'));
// let i=userInput2;
// do{
//     console.log('i');
//     i++;
// }while(i<=userInput3);


let A = Number(prompt("Enter the number:"));
let B = Number(prompt("Enter the number:"));
let sumEven = 0;
let sumOdd = 0;
let count = A;
do {
    if (count % 2 === 0) {
        sumEven += count;
    } else {
        sumOdd += count;
    }
    count++;
} while (count <= B);

console.log(`Sum of even numbers between ${A} and ${B} is: ${sumEven}`);
console.log(`Sum of odd numbers between ${A} and ${B} is: ${sumOdd}`);

let A1= Number(prompt("Enter the number:"));
let B1 = Number(prompt("Enter the end number:"));

let sumEven1 = 0;
let sumOdd1 = 0;

let count1 = A1;

while (count1 <= B1) {
    if (count1 % 2 === 0) {
        sumEven1 += count1;
    } else {
        sumOdd1 += count1;
    }
    count1++;  
}
console.log(`Sum of even numbers between ${A1} and ${B1} is: ${sumEven1}`);
console.log(`Sum of odd numbers between ${A1} and ${B1} is: ${sumOdd1}`);