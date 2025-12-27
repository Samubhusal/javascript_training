//-------------BREAK AND CONTINUE--------------------


//Break

// for (let i = 1; i <= 100; i++) {
//     if (i%2 == 1) {
//         continue;
//     } else {
//         console.log(i);
//     }
// }

// for (let i= 0; i <=100; i++){
//     if(i%2==0){
//         continue;
//     }else{
//         console.log(i);
//     }
// }

//divisible by 5

// for (let i= 1; i <=50; i++){
//     if(i%5==0){
//         continue;
//     }else{
//         console.log(i);
//     }
// }

//prime number print
// userName=5;
// let isPrime=true;
// for( let divide=2; divide<=userName-1;divide++){
//     if(userName% divide==0){
//         isPrime=false;
//         break;
//     }
// }
// if(isPrime){
//     console.log('the number is prime');
// }else{
//     console.log('the number is not prime');
// }

//-------------------------ARRAYS-----------------
//wap the input name of 100 student in variable
// let studentList=['abc' ,'bcd','asd'];
// console.log(studentList[1]);
// console.log(studentList.length);
// studentList.push('my new value');
// console.log(studentList);
// console.log(studentList.length);

//assignment:
let myStudentList=['Samikshya','Aakriti','Prashant','Prabha','Sandesh'];
console.log(myStudentList[0]);
console.log(myStudentList[1]);
console.log(myStudentList[2]);
console.log(myStudentList[3]);
console.log(myStudentList[4]);
console.log(myStudentList.length);
myStudentList.push('Anisha','Nisha','Aastha','Punam','Lucky');
console.log(myStudentList[5]);
console.log(myStudentList[6]);
console.log(myStudentList[7]);
console.log(myStudentList[8]);
console.log(myStudentList[9]);
console.log(myStudentList[10]);//undefined because the value is not entered in the list(variable)
console.log(myStudentList.length);


