
// function sub(x,y){
//     console.log(x-y);
// }
// //93,94,95 -declear
// //99,100,101-call

// sub(20,10);
// sub(30,40);
// sub(-10,40);

// function mul(x,y){
//     console.log(x*y);
// }

// mul(20,10);
// mul(30,40);
// mul(-10,40);

// function div(x,y){
//     console.log(x/y);
// }

// div(20,10);
// div(30,40);
// div(-10,40);

// function mod(x,y){
//     console.log(x%y);
// }

// mod(20,10);
// mod(30,40);
// mod(-10,40);


// //PRIMITIVE TYPE-> NUMBER,BOLLEAN,NAN,SYMBOL AND MANY MORE

// //NON-PRIMITIVE TYPE->OBJECT,ARRAY.


// //----create a function to print name--------
// //use parameters or take input from parameter

// function printName(name){
//     console.log('My name is:' +name)
// }
// printName('samikshya');



// //create a function to print welcome message
// //output should be Hello__name__,welcome to our platform.
// //its good to know you are from __address__
// //see you next __dayName__

// function welcomeMessage(name,address,dayName){
//     console.log(`hello ${name} !welcome to our platform`);
//     console.log(`Its good to know  you are from ${address}`);
//     console.log(`see you next ${dayName}`);
// }
// welcomeMessage('samikshya','butwal','monday');


// //create a function to calculate area of rectangle 
// //use parameter

// function calculateArea(length,width){
//     let area=length*width;
//     console.log(`The area of rectangle is ${area}`);
// }
// calculateArea(10,20);


// function f(A,B){
//     let add=(A+B);
//     console.log(add);
// }
// f(2,4);


// function welcomeMessage(name,address,dayName){
//     console.log(`hello ${name} welcome to our platform\nIts good to know  you are from ${address}\nsee you next ${dayName}`);
// }
// welcomeMessage('samikshya','butwal','monday');


//create  named:findsmallest(a,b)
//take two input from the users
//find the smallest among those
// let inputVariable=prompt('Enter your first number ');
// let input1Variable=prompt('Enter your second number ');

// function findSmallest(inputVariable,input1Variable){
//     if(inputVariable<input1Variable){
//         console.log(`${inputVariable} is the smallest number`);
//     }else if(inputVariable>input1Variable){
//         console.log(`${input1Variable}is the smallest number`);
//     }else{
//         console.log('Both number is equal');
//     }
// }
// findSmallest(inputVariable,input1Variable);


//create function valculatesumofarray(array)
//calculate the sum of element of array 
//console them

// function calculateSumofArray(array){
//     let sum=0;
//     for(let i=0;i<array.length;i++){
//         sum += array[i];
//     }
//     console.log(sum);
// }
// let input=[1,2,3,4,5];
// calculateSumofArray(input);


//------------------------------FUNCTION RETURNED VALUE------------------------------------------

// function calculateSum(a,b){
//     let sum=a+b;
//     return sum;
// }
// let result=calculateSum(10,11);
// console.log(result);

//create a function to welcome user
//take user name as parameter
//return value outside function
//console the welcome text outside of function

// function welcomeUser(name){
//     return (`welcome,${name}!`);
// }
// let name='Samikshya';
// let welcomeinput=welcomeUser(name);
// console.log(welcomeinput);


//assignment



// function collectStudentData(numStudents) {
//     let students = [];
//     for (let i = 0; i < numStudents; i++) {
//         let id = prompt(`Enter ID for student ${i + 1}:`);
//         let name = prompt(`Enter Name for student ${i + 1}:`);
//         let faculty = prompt(`Enter Faculty for student ${i + 1}:`);
//         let batch = prompt(`Enter Batch for student ${i + 1}:`);
//         let email = prompt(`enter Email for student ${i + 1}:`);
//         students.push({ id, name, faculty, batch, email });
//     }
//     return students;
// }

// function showAllStudents(students) {
//     console.log("Student Records:");
//     students.forEach((student, index) => {
//         console.log(`Student ${index + 1}:`);
//         console.log(` ID: ${student.id}`);
//         console.log(`  Name: ${student.name}`);
//         console.log(`  Faculty: ${student.faculty}`);
//         console.log(`  Batch: ${student.batch}`);
//         console.log(`  Email: ${student.email}`);
//         console.log('----------------------');
//     });
// }

// let num = Number(prompt("How many students do you want to enter?"));
// let studentList = collectStudentData(num);
// showAllStudents(studentList);



let TwoDArray=[
    [1,2,3],
    [4,5,6],
    [7,8,9],
];
console.log(TwoDArray[0][0]);//1
console.log(TwoDArray[0][1]);//2
console.log(TwoDArray[0][2]);//3
console.log(TwoDArray[1][0]);//4
console.log(TwoDArray[1][1]);//5
console.log(TwoDArray[1][2]);//6
console.log(TwoDArray[2][0]);//7
console.log(TwoDArray[2][1]);//8
console.log(TwoDArray[2][2]);//9

for(let i=0;i<=2;i++){
    for(let j=0;j<=2;j++){
        console.log(TwoDArray[i][j]);
    }
}

