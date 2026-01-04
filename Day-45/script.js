//ASYNCHRONOUS IN JAVASCRIPT
//----allows operations like network requests or file I/O to run in the background without blocking the main thread, keeping the user interface responsive.

// const { useCallback } = require("react");

//uses settimeout -> code does Not wait

// console.log("start");
// setTimeout(()=>{
//     console.log("This print for 2 seconds")
// },2000);
// console.log("End");

// let num=1;
// setTimeout(()=>{
//     num=5;
// },10);

// setTimeout(()=>{
//     console.log("A:",num);
// },0);
// console.log("B:",num);//b=1,a=1

//question in whatsapp
// console.log("step 1");
// setTimeout(()=>{
//     console.log("step 2");
// },0);
// setTimeout(()=>{
//     console.log("step 3")
// },500);
// setTimeout(()=>{
//     console.log("step 4");
// },100);


// console.log("A");
// setTimeout(()=>{
//     console.log("B");
// },0);
// setTimeout(()=>{
//     console.log("c")
// },0);
// setTimeout(()=>{
//     console.log("d")
// },50);

//callback in js
//A callback is a function passed as an argument to another to another function and executed inside it to perform a task

//callbacks are commonly used in asynchronous operations such that settimeout,file reading ,or API calls.

//with callback
// function greet(name, Callback){
//     console.log("Hello,"+ name);
//     Callback();
// }
// function askquestion(){
//     console.log("How are you ?");
// }
// greet("samikshya",askquestion);//hello samikshya how are you?

// //without callback
// function greet(name){
//     console.log("Hello,"+ name);
// }
// function askquestion(){
//     console.log("How are you ?");
// }
// greet("nisa");
// askquestion();//hello nisa

//PROMISE IN JAVASCRIPT
// A Promise is an object that represent the eventual completion (or failure)of an asynchronous operation amd its resulting value
//it helps manage asynchronous operation and its resulting value

//it helps manage asynchronous tasks in acleaner way than callbacks

//A Promise has three states:
//pending-initial state,operation not finished,
//fulfilled- operation completed sucessfully.
//rejected - operation failed.


// Create a simple promise
// let promise = new Promise((resolve, reject) => {
//     let taskDone = true; // change to false to see rejection
//     if (taskDone) {
//         resolve("Task is done!");
//     } else {
//         reject("Task failed!");
//     }
// });

// Using the promise
// promise
//     .then((message) => {
//         console.log(message); // runs if resolve() is called
//     })
//     .catch((error) => {
//         console.log(error);   // runs if reject() is called
//     });

// Async/Await in JavaScript

// async makes your function wait-friendly.
// It means the function can use await, and it automatically returns a Promise.

// Await

// await tells JavaScript:
// “Stop here until this work is finished.”
// (But only works inside an async function.)

// function api(){
//     return new Promise((resolve, reject) => {
//        setTimeout(()=>{
//         console.log("Weather data");
//         resolve(200);
//        },2000) ;
//     });
// }
// async function getWeatherData() {
//     await api();
    
// }

//create an async function greetuser

function  user(){
    return new Promise((resolve,reject)=>{
        console.log("Hello");
        resolve(0);

    });
} 
greetuser();
async function greetuser() {
    await user();
}
greetuser();

