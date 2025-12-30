//................SET TIMEOUT AND SET INTERVAL(part of asynchronous programming)...........


//Synchronous counter and asynchronous counter 


console.log(1);
console.log(2);
setTimeout(function(){
    console.log(3)
},1000);
console.log(4);


// setTimeout(function (){
//     console.log('Hello World');
// }, 1000);

// setInterval(function (){
//     console.log('Set interval fn');
//     return;
// }, 1000);

// //....................Date Object.....................
// const date=Date.now(); //UNIX EPOCH,1970 rati 12 baja 
// console.log(date);          //in second,2k38 problem

