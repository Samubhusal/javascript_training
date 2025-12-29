//-----------FUNCTION EXPRESSION ,CALLBACK FUNCTION,FUNCTION AS FIRST CLASS CITIZENS

//FIRST CLASS CITIZEN 
//FUNCTION CAN BE ASSIGNED TO A VARIABLE 
let myFunction=function(name){
    console.log(`Hy ${name}`);
};
myFunction('samikshya');


let myFn=function(){
    console.log('hello world');
};
myFn();


//FUNCTION CAN BE PASSED AS A ARGUMENT
function callBack(abc){
    abc();
}
function built(){
    console.log('function can passed as a argument');
}
callBack(built);


//A FUNCTION CAN RETURN ANOTHER FUNCTION
function myFunction1(){
    function fn(){
        console.log('this is the function to return')
    }
    return fn;
}
let result=myFunction1();
result();


//wap to create callback fn
//create the first fn with name factory 
//it takes another fn as an argument 
//call that passed fn inside factory fn

function callBack(fn){
    fn();
}function name(){
    console.log("it is the factory ");
}
callBack(name);

//create a function that takes number as input and is known for returning 
// another fn
//if user pases 1 as a argument then return function that print name
//if user pases 0 as a argument then return function that print address
//call the returned fn

function factory(num){
    if(num==0){
        return function(){
               console.log('My address is butwal');
        };
    }else if (num==1){
        return function(){
            console.log('My name is samikshya');
        };
    }
    
}

let res=factory(0);
res();