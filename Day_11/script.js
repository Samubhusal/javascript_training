//-----------------IF ELSE IF LADDER-----------------------------
// let userInput=(prompt('Enter your gpa'));
// if(userInput<=3.7 && userInput>=3.5){
//     console.log('students will score first');
// }else if(userInput>=2.7 && userInput<=3.1){
//     console.log('student will score second');
// }else{
//     console.log('none of the student score');
// }

// let userAge=(prompt('Enter your age'));
// if(userAge<=12 && userAge<=0){
//     console.log('you are infant');
// }else if(userAge<=20 && userAge>=13){
//     console.log('you are young');
// }else if(userAge<=40 && userAge>=21){
//     console.log('you are adult');
// }else if(userAge<=80 && userAge>=41){
//     console.log('you are old');
// }else if(userAge<=100 && userAge>=81){
//     console.log('you are too old');
// }else{
//     console.log('you were never borned or already in heaven');
// }

// let userSalary=Number(prompt('Enter your salary'));
// if(userSalary>100 && userSalary<0){
//     console.log('10% tax');
// }else{
//     console.log(100% tax);
// }

// let userTime= prompt('Enter your time');
// if(userTime<=6 && userTime>=12){
//     console.log('morning');
// }else if(userTime<12 && userTime>=4){
//     console.log('afternoon');
// }else if(userTime<4 && userTime>=8){
//     console.log('evening');
// }else{
//     console.log('night')
//}


// let userSide=Number(prompt('Enter your side'));
// let userSide1=Number(prompt('enter your side1'));
// let userSide2=Number(prompt('Enter your side2'));
// if(userSide==userSide1 || userSide1==userSide2){
//     console.log('all side is equal');//equilater
// }else if(userSide==userSide1||userSide1==userSide2||userSide==userSide2 ){
//     console.log('2 side is equal');//isolateral
// }else{
//     console.log('scalar');
// }

// let weight=prompt('enter your weight');
// let height=prompt('enter your height');
// let result=weight/height*height;
// if(result<18.5 && result>=0){
//     console.log(underweight);
// }else if(result<24.9 && result>18.5){
//     console.log('Normal weight');
// }else if(result<29.9 && result>24.9){
//     console.log('Overweight');
// }else if(result<30){
//     console.log('obese');
// }else{
//     console.log('sensitive');
// }
    
// let firstNumber=Number(prompt('Enter your a'));
// let secondNumber=Number(prompt('Enter your b'));
// let thirdNumber=Number(prompt('Enter your c'));
// if(firstNumber>=secondNumber && firstNumber>=thirdNumber){
//     console.log('firstnumber is greater number');
// }else if(secondNumber>=firstNumber && secondNumber>=thirdNumber){
//     console.log('second number is greater number');
// }else{
//     console.log('third number is greater number');
// }

//ASSIGNMENT

//1.electricity bill calculation

// let inputBill=prompt('Enter your   bill number');
// if(inputBill<=100 && inputBill >=0){
//    console.log('1.5/unit');
// }else if(inputBill <=100 && inputBill >=300){
//     Console.log('2/unit');
// }else{
//     console.log('3/unit');
// }

//2.internet data usage alert

// let userInput=prompt('Enter your number');
// if(userInput<=50 && userInput>=0){
//    console.log('normal usage');
// }else if(userInput<=50 && userInput>=90){
//    console.log('warning');
// }else{
//    console.log('over limit!');
// }

//3.season checker (month number)

// let monthCheck = Number(prompt('enter  a month'));
// if (monthCheck == 12 && monthCheck == 1 && monthCheck == 2) {
//     console.log('winter');
// } else if (monthCheck >= 3 && monthCheck <= 5) {
//     console.log('spring');
// } else if (monthCheck > 5 && monthCheck <= 8) {
//     console.log('summer');
// } else {
//     console.log('autumn');
// }

// 4.bank interest rate

// let bankInterest = Number(prompt('enter a year'));
// if (bankInterest >= 0 && bankInterest < 1) {
//     console.log('5% interest');
// } else if (bankInterest >= 1 && bankInterest < 3) {
//     console.log('6.5% interest');
// } else {
//     console.log('7.5% interest');

// }

//5.movie rating classifier(out 0f 10)

// let movieRating=prompt('Enter a rating number');
// if(movieRating>=8 && movieRating<=10){
//    console.log('excellent');
// }else if(movieRating>=5 && movieRating<=7.9){
//    console.log('average');
// }else{
//    console.log('poor')
//}

//6. loan approval based on credit score

// let creditScore=prompt('Enter your loan');
// if(creditScore<=750 && creditScore>=750){
//    console.log('Apporved');
// }else if(creditScore>=600 && creditScore<=750){
//    console.log('Review');
// }else{
//    console.log('Rejected');
// }

//7.shipping charges based on distance

// let userNum=prompt('Enter your charges');
// if(userNum<=10 && userNum>=0){
//    console.log('Free');
// }else if(userNum>=10 &&userNum<=50){
//    console.log('half per discount');
// }else{
//    console.log('all discount');
// }

//8.student performance evaluation

// let studentName=prompt('Enter your student performance');
// if(studentName<90){
//    console.log('Excellent');
// }else if(studentName>=70 && studentName<=90){
//    console.log('good');
// }else if(studentName>=50&& studentName<=69){
//    console.log('average');
// }else{
//    console.log('Needs imporvemnet');
// }

// 9.typing speed evaluation

// let typingSpeed=Number(prompt('enter a number'));
// if (typingSpeed>=60){
//     console.log('fast');
// } else if (typingSpeed>40 && typingSpeed<60){
//     console.log('average');
// } else {
//     console.log('slow');
// }

// 10.language level based on test score

// let languageLevel=Number(prompt('enter a number'));
// if (languageLevel>=85){
//     console.log('advanced');
// } else if( languageLevel>60 && languageLevel< 85){
//     console.log('intermediate');
// } else { 
//     console.log('beginner');
// }

// 11.income tax bracket

//  let incometax=Number(prompt('enter a income'));
//  if (incometax<2.5){
//     console.log('no tax');
//  } else if (incometax>2.5 && incometax<5){
//     console.log('5%');
//  } else{
//     console.log('30%');
//  }

 //12.water quality index

//  let waterQuality=Number(prompt('enter a  index'));
//  if (waterQuality>=0&&waterQuality<=50){
//     console.log('good');
//  } else if(waterQuality>51 && waterQuality<=100){
//     console.log('moderate');
//  } else if(waterQuality>100 && waterQuality<200){
//     console.log('unhealthy');
//  } else {
//     console.log('dangerous');
//  }
 
//  13.voting eligibility

//  let votingEligible=Number(prompt('enter age'));
//  if(votingEligible<18){
//     console.log('not eligible');
//  } else if(votingEligible>=18 && votingEligible<60){
//     console.log('eligible');
//  } else {
//     console.log('senior voter');
//  }

//  14.app rating feedback

//  let appRating=Number(prompt('enter  a rate'));
//  if(appRating>4.5 && appRating<5){
//     console.log('excellent');
//  } else if(appRating>3 && appRating<4.4){
//     console.log('good');
//  } else {
//     console.log('poor');
//  }

//  15.coffee strength selector:

// let coffeeSeletor=Number(prompt('enter a number'));
// if (coffeeSeletor==1){
//     console.log('light');
// } else if(coffeeSeletor==2){
//     console.log('medium');
// } else if(coffeeSeletor==3){
//     console.log('strong');
// } else {
//     console.log('invalid');
// }

// 16.bus fare by age

// let busFare=Number(prompt('enter age'));
// if (busFare<5){
//     console.log('free');
// } else if(busFare>5 && busFare<18){
//     console.log('half');
// } else { 
//     console.log('full');
// }

// 17.subscription type

// let type=Number(prompt('enter number'));
// if (type==1){
//     console.log('basic');
// } else if(type==2){
//     console.log('standard');
// } else if(type==3){
//     console.log('hard');
// } else { 
//     console.log('invalid option');
// }

// 18.mobile battery level

// let mobile=Number(prompt('enter number'));
// if (mobile<20){
//     console.log('low');
// } else if(mobile>20 && mobile<80){
//     console.log('normal');
// } else {
//     console.log('high');
// }


// 19.CPU temperature monitor

// let cPu=Number(prompt('enter temp'));
// if (cPu<50){
//     console.log('safe');
// } else if(cPu>50 && cPu<75){
//     console.log('warm');
// } else { 
//     console.log('danger');

// }
// 20.body temperature

// let bodyTemp=Number(prompt('enter a number'));
// if (bodyTemp<36){
//     console.log('low');
// } else if(bodyTemp>36 && bodyTemp<37.5){
//     console.log('normal');
// } else {
//     console.log('fever');
// }

// // 22.credit card status

// let  credit=prompt('enter card');
// if (credit== billpaid){
//     console.log('active');
// } else if( credit==payment){
//     console.log('warning');
// } else {
//     console.log('blocked');
// }

// 23.online order status

// let online=Number(prompt('enter order'));
// if (online==0){
//     console.log('odered');
// } else if(online==1){
//     console.log('packed');
// } else if(online==2){
//     console.log('delivered');
// } else{
//     console.log('invalid status');
// }

// 24.software version compatibility

// let version=Number(prompt('enter version'));
// if(version<2){
//     console.log('oudated');
// } else if(version>2 && version<3){
//     console.log('compatible');
// } else {
//     console.log('beta feature required');
// }

// 25.driving license status by age

// let licence=Number(prompt('enter age'));
// if (licence<18){
//     console.log('ineligible');
// } else if( licence>18 && licence<65){
//     console.log('eligible');
// } else{
//     console.log('renewal required');
// }
// // 26.fule efficiency

// let fuel=Number(prommpt('enter number'));
// if (fuel>=20){
//     console.log('excellent');
// } else if(fuel>15 && fuel<20){
//     console.log('good');
// } else {
//     console.log('poor');
// }
// // 27.room size(sqm):

// let signal=Number(prompt('enter a number'));
// if (signal==0 && signal==1){
//     console.log('weak');
// } else if(signal==3&& signal==2){
//     console.log('medium');
// } else{
//     console.log('strong');
// }

//30.mobile signal strenght(bars)
// let userInput=Number(prompt('Enter your signal '));
// if(userInput>=0 && userInput<=1){
//     console.log('weak');
// }else if(userInput<=3 && userInput>=2){
//     console.log('medium');
// }else{
//    console.log('Strong'); 
// }

//31.file storage alert
// let userFile=prompt('Enter your file number in percentage');
// if(userFile<70){
//     console.log('normal');
// }else if(userFile>=70 && userFile<=90){
//     console.log('warning');
// }else{
//     console.log('critical');
// }

//32.plant watering schedule
//let soilMoisture=prompt('Enter your schedule');
// if(soilMoisture<30){
//     console.log('water now');
// }else if(soilMoisture>=30 && soilMoisture<=60){
//     console.log('check tomorrow');
// }else{
//     console.log('no watering needed');
// }

//33.review
// let userReview=prompt('Enter your rating');
// if(userReview==5){
//     console.log('Excellent');
// }else if(userReview>=3 && userReview<=4){
//     console.log('satisfactory');
// }else{
//     console.log('poor')
// }

