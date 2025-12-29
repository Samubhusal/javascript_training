// //--------------WAYS OF DEFINING FUNCTIONS------------------------------

// //NORMAL WAYS WITH NAME

// function PrintName(name){
//     console.log(name);//function expression
// };
// PrintName();

// //----ARRAY FUNCTION ,LAMBDA FUNCTION ,ANONMYOUS FUNCTION->LAMBDA-->SHORT\EASY

// let PrintName1=(name)=>{
//     console.log(name);
// }
// PrintName1('samikshya');

// let sum=(a,b)=>{
//     console.log(a+b);
// };
// sum(30,5);

// //IN NORMAL FN YOU WOULD NEED TO EXPLICITY USE RETURN KEYWORD,IN ARROW FUNCTION YOU DONT HAVE TO DO ALL THOSE HEAVY LIFTING .

// let subFN=(a,b)=>a-b;
// let subResult=subFN(10,5);
// console.log(subResult);

// let sumFN=(x,y)=>x+y;
// let sumResult=sumFN(10,20);
// console.log(sumResult);

// //-----------------CALLBACK FN again
// function pizza(fn){
//     fn();
//     console.log('argument fn called');
// };

// //another by sorting
// pizza(() => console.log('samikshya bhusal'));

// //BACK TO ARRAY AGAIN 
// //callback fn and higher order functiona are same with different name only


// let MyArray=[3,4,5,3,3,5,5,3,2];

// MyArray.forEach(function(value,index){
//     console.log(`Index =${index} with value=${value}`);
// });

// //now pass arrow fn inside for each to print  element again

// let inArray=[1,2,3,4,5,6,7];

// inArray.forEach((value,index)=>
//     console.log(`Index =${index} and value=${value}`)
// );

// //use foreach to print sum of all elements
// let Arrays=[1,2,3,4,5,6,7];
// Arrays.forEach(num =>Arrays+=num);//(values,index){console.log-----}
// console.log(`sum of the all element :${Arrays}`);

//print all element which are divisible by 3 only ,use foreach
let array=[2,3,8,4,9,5];
array.forEach(num =>{
    if(num %3 === 0){
        console.log(num);
    }
});

//------------------map ------------------

let studentsName=['ram','hari','shayam','roman','roshan'];
let result=studentsName.map(function(value,index){
    return `hello ${value}`;
});
console.log(result);

//use map to make all name plural
//print all accordingly
let studentsName1=['ram','hari','shayam','roman','roshan'];
let results=studentsName1.map(name=> `${name}'s`);
results.forEach(name =>console.log(name));

//partice

//FUNCTION CAN BE ASSIGNED TO A VARIABLE 
let myFunction=function(name){
    console.log(`Hy ${name}`);
};
myFunction('samikshya');


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
let result1=myFunction1();
result1();
 