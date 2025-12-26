//------------------------loop--------------------------------------------
// for(let count=1; count<=100; count++);
// console.log('Samikshya');
// for(let count=1; count<=100; count++){
//     console.log(count);
// }

// 100 to 1

// for(let num=100; num>=1; num--){
//     console.log(num)
// }

// for(let even=2 ;even<=100/2; even=even+2){
//     console.log(even);
// }

//1 to 100 number
// for (let count=1;count<=100;count++){
//     console.log('count');
// }

// let userNum=prompt('Enter your num');
// let userNum1=prompt('Enter your num');
// for(let count=userNum; count<=userNum1; count++){
//     if(count %2==1){
//     console.log(count);
//     }
// }

//for(let count=1; count<=10; count++){
//     console.log(5*count);
//     console.log(`5 X ${count}=${5*count}`);
// //}

// let num1=Number(prompt('Enter your first number'));
// let num2=Number(prompt('Enter your second number'));
// let oddtotal=0;
// for( let count=num1;count<=num2; count++){
//     if(count% 2 ==0){
//         console.log(count+=oddtotal);
//     }
//     console.log(`sum of the odd number between ${num1}and ${num2} :${oddtotal}`);
// }

// let number1=Number(prompt('Enter your even number'));
// let number2=Number(prompt('Enter your even number'));
// let eventotal=0;
// for(let count=number1; count<=number2; count++){
//     if(count % 2==0){
//         console.log(count+=eventotal);
//     }
//     console.log(`sum of the even number between ${number1} and ${number2} is:${eventotal}`);
// }

// let num1=Number(prompt('Enter your first number'));
// let num2=Number(prompt('Enter your second number'));
// let sum=0;
// for(let count=num1; count<=num2; count++){
//     if(count% 2 ==1){
//         sum+=1;
//     }
// }
// console.log(`sum of the odd number between ${num1}and ${num2} :${sum}`);

// let number1=Number(prompt('Enter your number'));
// let number2=Number(prompt('Enter your second number'));
// let sum1=0;
// let sum2=0;
// for(let count=number1; count<=number2; count++){
//     if(count% 2 ==1){
//         sum1 +=count;
//     }else{
//         sum2+=count;
    
//     }
// }
// console.log(`sum of the even number between ${number1}and ${number2} :${sum2}`);
// console.log(`sum of the odd number between ${number1}and ${number2} :${sum1}`);

//print odd number from a to b
let number1=Number(prompt('Enter your number'));
let number2=Number(prompt('Enter your second number'));
for(let count=number1; count<=number2;count++){ 
    if(count%2==1){
        console.log(count);
    }
}




// //electricity bill calculation
// let inputBill=Number(prompt('Enter your bill number'));
// for(let count=0;count<inputBill;count++){
//     if (inputBill<=100){
//             console.log('less than 100');
//         }    
//         else if(inputBill>100 && inputBill<=200){
//             console.log('greater than 100');
//         }
//         else if(inputBill>200 && inputBill<=300){
//             console.log('greater than 200');
//         }
//         else if(inputBill>300 && inputBill<=400){
//             console.log('greater than 300');
//         }
//         else if(inputBill>400 && inputBill<=500){
//             console.log('greater than 400');
//         }
//         else{
//             console.log('greater than 500');
//         }
// }

// // Internet Data Usage Alert:
// let inputData=Number(prompt('enter your data'));
// for(let count=0;count>inputData;count++){
//    if(inputData<50){
//     console.log('normal');
//    }
//    else if (inputData>50&& inputData<=100){
//     console.log('warning');
//    }
//    else if(inputData>100 && inputData<=150){
//     console.log('Over Limit');
//    }
//    else{
//     console.log('exceeded limit');
//    }
// }

// //season cheaker(Month number)
// let inputMonth=Number(prompt('enter Month number'));
// for (let i=0; i<inputMonth; i++){
//     if (inputMonth==1 ||inputMonth==2 || inputMonth==3){
//         console.log('winter');
//     }
//     else if (inputMonth==4 || inputMonth==5 || inputMonth==6){
//         console.log('spring');
//     }
//     else if (inputMonth==7 || inputMonth==8 || inputMonth==9){
//         console.log('summer');
//     }
//     else if (inputMonth==10 || inputMonth==11 || inputMonth==12){
//         console.log('autumn');
//     }
//     else{
//         console.log('invalid Month');
//     }
// }


// //Bank interest rate
// let inputBank=Number(prompt('enter inputBank interest rate'));
// for (let i=0; i<inputBank; i++){
//     if  (inputBank<=5){
//         console.log('low interest');
//     }
//     else if  (inputBank>5 && inputBank<=10){
//         console.log('medium interest');
//     }
//     else if  (inputBank>10 && inputBank<=15){
//         console.log('high interest');
//     }
//     else{
//         console.log('very high interest');
//     }
// }

// //movie rating classifier
// let inputRating=Number(prompt('enter inputRatting rating'));
// for (let i=0; i<inputRating; i++){
//     if (inputRating<=2){
//         console.log('bad');
//     }
//     else if (inputRating>2 && inputRating<=4){
//         console.log('average');
//     }
//     else if (inputRating>4 && inputRating<=6){
//         console.log('good');
//     }
//     else if (inputRating>6 && inputRating<=8){
//         console.log('very good');
//     }
//     else{
//         console.log('excellent');
//     }
// }


// //loan aaproval based on credit score
// let credit=Number(prompt('enter credit score'));
// for (let i=0; i<credit; i++){
//     if (credit<=600){
//         console.log('loan not approved');
//     }
//     else if (credit>600 && credit<=750){
//         console.log('loan approved with high interest');
//     }
//     else if (credit>750 && credit<=800){
//         console.log('loan approved with medium interest');
//     }
//     else{
//         console.log('loan approved with low interest');
//     }
// }

// // shipping charge based on distance
// let distance=Number(prompt('enter distance'));
// for (let i=0; i<distance; i++){
//     if (distance<=10){
//         console.log('shipping charge is 5');
//     }
//     else if (distance>10 && distance<=20){
//         console.log('shipping charge is 10');
//     }
//     else if (distance>20 && distance<=30){
//         console.log('shipping charge is 15');
//     }
//     else{
//         console.log('shipping charge is 20');
//     }
// }


// //student performance evaluation
// let marks=Number(prompt('enter marks'));
// for (let i=0; i<marks; i++){
//     if (marks<=40){
//         console.log('fail');
//     }
//     else if (marks>40 && marks<=60){
//         console.log('pass');
//     }
//     else if (marks>60 && marks<=80){
//         console.log('good');
//     }
//     else{
//         console.log('excellent');
//     }

// }

// //typing speed evaluation
// let speed=Number(prompt('enter typing speed'));
// for (let i=0; i<speed; i++){
//     if (speed<=20){
//         console.log('slow');
//     }
//     else if (speed>20 && speed<=40){
//         console.log('average');
//     }
//     else if (speed>40 && speed<=60){
//         console.log('fast');
//     }
//     else{
//         console.log('very fast');
//     }
// }

// //language level based on test score
// let test=Number(prompt('enter test score'));
// for (let i=0; i<test; i++){
//     if (test<=50){
//         console.log('beginner');
//     }
//     else if (test>50 && test<=70){
//         console.log('intermediate');
//     }
//     else if (test>70 && test<=90){
//         console.log('advanced');
//     }
//     else{
//         console.log('expert');
//     }
// }

// //income tax bracket
// let income=Number(prompt('enter income'));
// for (let i=0; i<income; i++){
//     if (income<=250000){
//         console.log('no tax');
//     }
//     else if (income>250000 && income<=500000){
//         console.log('5% tax');
//     }
//     else if (income>500000 && income<=1000000){
//         console.log('10% tax');
//     }
//     else{
//         console.log('20% tax');
//     }
// }

// // water quality index
// let water=Number(prompt('enter water quality index'));
// for (let i=0; i<water; i++){
//     if (water<=50){
//         console.log('good');
//     }
//     else if (water>50 && water<=100){
//         console.log('average');
//     }
//     else if (water>100 && water<=150){
//         console.log('poor');
//     }
//     else{
//         console.log('very poor');
//     }
// }

// //voting eligibility
// let age=Number(prompt('enter age'));
// for (let i=0; i<age; i++){
//     if (age<18){
//         console.log('not eligible to vote');
//     }
//     else if (age>=18 && age<=25){
//         console.log('eligible to vote');
//     }
//     else if (age>25 && age<=35){
//         console.log('eligible to vote');
//     }
//     else{
//         console.log('eligible to vote');
//     }
// }

// //app rating feedback
// let app=Number(prompt('enter app rating'));
// for (let i=0; i<app; i++){
//     if (app<=2){
//         console.log('poor');
//     }
//     else if (app>2 && app<=4){
//         console.log('average');
//     }
//     else if (app>4 && app<=6){
//         console.log('good');
//     }
//     else if (app>6 && app<=8){
//         console.log('very good');
//     }
//     else{
//         console.log('excellent');
//     }
// }

// //coffee strength selector
// let coffee=Number(prompt('enter coffee strength'));
// for (let i=0; i<coffee; i++){
//     if (coffee<=2){
//         console.log('weak');
//     }
//     else if (coffee>2 && coffee<=4){
//         console.log('medium');
//     }
//     else if (coffee>4 && coffee<=6){
//         console.log('strong');
//     }
//     else{
//         console.log('extra strong');
//     }
// }

// //bus fare by age
// let bus=Number(prompt('enter age'));
// for (let i=0; i<bus; i++){
//     if (bus<=5){
//         console.log('free');
//     }
//     else if (bus>5 && bus<=12){
//         console.log('half fare');
//     }
//     else if (bus>12 && bus<=60){
//         console.log('full fare');
//     }
//     else{
//         console.log('senior citizen fare');
//     }
// }

// //subscription type
// let subscription=Number(prompt('enter subscription type'));
// for (let i=0; i<subscription; i++){
//     if (subscription==1){
//         console.log('basic');
//     }
//     else if (subscription==2){
//         console.log('standard');
//     }
//     else if (subscription==3){
//         console.log('premium');
//     }
//     else{
//         console.log('invalid subscription type');
//     }
// }


// //game difficulty level
// let game=Number(prompt('enter game difficulty level'));
// for (let i=0; i<game; i++){
//     if (game==1){
//         console.log('easy');
//     }
//     else if (game==2){
//         console.log('medium');
//     }
//     else if (game==3){
//         console.log('hard');
//     }
//     else{
//         console.log('invalid game difficulty level');
//     }
// }

// //blood pressure status
// let bp=Number(prompt('enter blood pressure'));
// for (let i=0; i<bp; i++){
//     if (bp<120){
//         console.log('normal');
//     }
//     else if (bp>=120 && bp<=139){
//         console.log('elevated');
//     }
//     else if (bp>=140 && bp<=159){
//         console.log('high blood pressure stage 1');
//     }
//     else{
//         console.log('high blood pressure stage 2');
//     }
// }

// //mobile battery level
// let battery=Number(prompt('enter battery level'));
// for (let i=0; i<battery; i++){
//     if (battery<=20){
//         console.log('low battery');
//     }
//     else if (battery>20 && battery<=50){
//         console.log('medium battery');
//     }
//     else if (battery>50 && battery<=80){
//         console.log('good battery');
//     }
//     else{
//         console.log('full battery');
//     }
// }


// //cpu temperature monitor
// let cpu=Number(prompt('enter cpu temperature'));
// for (let i=0; i<cpu; i++){
//     if (cpu<=50){
//         console.log('normal');
//     }
//     else if (cpu>50 && cpu<=70){
//         console.log('warning');
//     }
//     else if (cpu>70 && cpu<=90){
//         console.log('overheating');
//     }
//     else{
//         console.log('critical temperature');
//     }
// }

// //body temperature
// let body=Number(prompt('enter body temperature'));
// for (let i=0; i<body; i++){
//     if (body<=36.5){
//         console.log('normal');
//     }
//     else if (body>36.5 && body<=37.5){
//         console.log('slightly elevated');
//     }
//     else if (body>37.5 && body<=38.5){
//         console.log('fever');
//     }
//     else{
//         console.log('high fever');
//     }
// }

// //credit  card status
// let creditcard=Number(prompt('enter credit card status'));
// for (let i=0; i<creditcard; i++){
//     if (creditcard==1){
//         console.log('active');
//     }
//     else if (creditcard==2){
//         console.log('inactive');
//     }
//     else if (creditcard==3){
//         console.log('blocked');
//     }
//     else{
//         console.log('invalid credit card status');
//     }
// }


// //online order status code
// let order=Number(prompt('enter order status code'));
// for (let i=0; i<order; i++){
//     if (order==1){
//         console.log('pending');
//     }
//     else if (order==2){
//         console.log('shipped');
//     }
//     else if (order==3){
//         console.log('delivered');
//     }
//     else{
//         console.log('invalid order status code');
//     }
// }

// //driving liscence status by age
// let driving=Number(prompt('enter age'));
// for (let i=0; i<driving; i++){
//     if (driving<18){
//         console.log('not eligible for driving licence');
//     }
//     else if (driving>=18 && driving<=25){
//         console.log('eligible for learning licence');
//     }
//     else if (driving>25 && driving<=35){
//         console.log('eligible for permanent licence');
//     }
//     else{
//         console.log('eligible for senior citizen licence');
//     }
// }


// //mobile Signal strength
// let inputSignal=Number(prompt('enter inputSignal strength'));
// for (let i=0; i<inputSignal; i++){
//     if (inputSignal<=20){
//         console.log('weak inputSignal');
//     }
//     else if (inputSignal>20 && inputSignal<=50){
//         console.log('average inputSignal');
//     }
//     else if (inputSignal>50 && inputSignal<=80){
//         console.log('good inputSignal');
//     }
//     else{
//         console.log('excellent inputSignal');
//     }
// }

// //room size(sqm)
// let inputSize=Number(prompt('enter room size'));
// for (let i=0; i<inputSize; i++){
//     if (inputSize<=10){
//         console.log('small inputSize');
//     }
//     else if (inputSize>10 && inputSize<=20){
//         console.log('medium inputSize');
//     }
//     else if (inputSize>20 && inputSize<=30){
//         console.log('large inputSize');
//     }
//     else{
//         console.log('extra large inputSize');
//     }
// }

// //marathon completion
// let inputMarathon=Number(prompt('enter Marathon completion time'));
// for (let i=0; i<inputMarathon; i++){
//     if (inputMarathon<=2){
//         console.log('excellent');
//     }
//     else if (inputMarathon>2 && inputMarathon<=3){
//         console.log('good');
//     }
//     else if (inputMarathon>3 && inputMarathon<=4){
//         console.log('average');
//     }
//     else{
//         console.log('poor');
//     }
// }

// //weather type by temperature
// let inputWeather=Number(prompt('enter temperature'));
// for (let i=0; i<inputWeather; i++){
//     if (inputWeather<=0){
//         console.log('snowy');
//     }
//     else if (inputWeather>0 && inputWeather<=15){
//         console.log('cold');
//     }
//     else if (inputWeather>15 && inputWeather<=25){
//         console.log('pleasant');
//     }
//     else{
//         console.log('hot');
//     }
// }
