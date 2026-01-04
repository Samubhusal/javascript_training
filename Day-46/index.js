//What is error handling?
//Error handling is how a program deals with mistake or problems that happen while
//  it’s running. Instead of crashing, the program can catch the error and respond 
// safely.


// 1. Try-Catch
// try → code that might cause an error goes here.
// catch → what to do if an error happens.


// 2. Finally
// finally always runs, no matter if there’s an error or not.
// Useful for cleanup (closing files, stopping timers).



// 3. Throwing Errors
// You can create your own error when something is wrong using throw.


// 4. Promise Error Handling
// For asynchronous code:
// .catch() handles promise errors
// With async-await, use try-catch.


// 5. Error Types
// Common JavaScript errors:
// Error → general error
// TypeError → wrong type (like number + string)
// ReferenceError → variable doesn’t exist



function divide(a,b){
    try{
        if(b===0) throw "cannot divide by 0!";//throw error if b is 0
        let result=a/b;
        console.log("Result:",result);
    }catch(error){
        console.log("error:",error);
    }finally{
        console.log("Division attempt finished.");
    }
}

divide(30,3);
divide(10,0);



// Create a function checkNumber(num) that:
// Throws an error "Number must be positive!" if num < 0.
// Otherwise, returns the number.
// Create another function getData(num) that:
// Uses try-catch-finally.
// Calls checkNumber(num) and prints "Valid number: " if no error.
// In catch, prints "Error caught: " followed by the error.
// In finally, prints "Check finished.".
// Test your function with:
// getData(5) → should print "Valid number: 5" and "Check finished.".
// getData(-3) → should print "Error caught: Number must be positive!" and "Check finished.".

function checkNumber(num){
    if(num<0) throw "Number must be positive!";
    return num;
}

function getData(num){
    try{
        let result=checkNumber(num);
        console.log("valid number:",result);
    }catch{
        console.log("error caught:",error);
    }finally{
        console.log("check finished:");
    }
}
getData(5);
getData(-3);//OUTPUT-----valid number-5  check finished.
//error caught :number must be postive 
//check finished.

// What are Modules?

// Modules are separate files of code that can be imported and reused in other files.

// Helps organize code better.
// Avoids repeating code.
// Makes large projects easier to manage.

// Exporting: Share code (functions, variables, classes) from a module.
// Importing: Use code from another module. 

