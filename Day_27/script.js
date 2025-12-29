
// let TwoDArray=[
//     [1 , 2, 3, 4],
//     [5 ,6,7,8],
//     [9,10,11,12],
// ]
// let TwoDArrayB=[
//     [1 , 2, 3, 4],
//     [5 ,6,7,8],
//     [9,10,11,12],
// ]
// for(let i=0;i<3;i++){
//     for(let j=0;j<4;j++){
//         let sum=TwoDArray[i][j]+TwoDArrayB[i][j];
//         console.log(sum);
//     }
// }
// //to show the new array in a and b
// let TwoDArray1=[
//     [1 , 2, 3, 4],
//     [5 ,6,7,8],
//     [9,10,11,12],
// ]
// let TwoDArray2=[
//     [1 , 2, 3, 4],
//     [5 ,6,7,8],
//     [9,10,11,12],
// ]
// let results=[];

// for(let i=0;i<3;i++){
//     let row=[];
//     for(let j=0;j<4;j++){
//          let result=TwoDArray1[i][j]+TwoDArray2[i][j];
//         row.push(result);
//     }
//     results.push(row);
// }
// console.log(results);

//function returning value and taking no arguments
function Value(){
    let data="this is a returned value.";
    return data;
}
let result=Value();
console.log(result);

//function not returning value and taking arguments
function values(a,b){
    let sum=a+b;
    console.log(sum);
}
values(4,5);

//function returning value and taking arguments
function number(x,y){
    let sum=x+y;
    return sum;
}
let results=values(4,5);
console.log(results);

//wap to print the odd or even  number 
function num(number){
    if (number==0){
        return 0;
    }else if (number%2==0){
        return"the given number is even";
    }else{
        return"the given number is odd";
    }
 };
console.log(num(33));