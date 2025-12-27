// let myNumber=[1, 2, 3, 4, 5];
// let sum=0;
// for(let i=0; i < myNumber.length; i++){
//       sum=sum+myNumber[i];
// }
// console.log(sum);

//let myArrayList=['samikshya', 'suman', 'sanjay', 'sandesh', 'sujan'];
// for (let i=0; i<myArrayList.length;i++){
//     console.log(myArrayList[i]);
// }

// let myList = [100, 101, 102, 103, 104, 105];
// let sum = 0;
// for (let i = 0; i < myList.length; i++) {
//     if (i % 2 == 0) {
//         sum = sum + myList[i];
//     }
// }
// console.log(sum);

// let arrayElement=[ 1000,1001,1002,1003,1004,1005,1006,1007,1008,1009];
// let sum=0;
// for(let i=0 ; i<arrayElement.length; i++){
//     if(i%2!=0){
//         sum=sum + arrayElement[i];
//     }
// }
// console.log(sum);


// let myNumber = [499, 100, 1000, 2, 10];
// let greatest = myNumber[0];
// for (let i = 0; i < myNumber.length; i++) {
//     if (myNumber[i] >greatest) {
//         greatest = myNumber[i];
//     }
// }
// console.log(greatest);

// let myNumber = [499, 100, 1000, 2, 10];
// let smallest = myNumber[0];
// for (let i = 0; i < myNumber.length; i++) {
//     if (myNumber[i]<smallest) {
//         smallest= myNumber[i];
//     }

// }
// console.log(smallest);

//wap to reverse an array
// let myArrayList=[499,100,1000,2,10];
// let reverse=[];
// for(let i=0;i<myArrayList.length;i++){
//     reverse.unshift(myArrayList[i]);
// }
// console.log(reverse);













//assignment -day-17
let bookList = ['maths', 'science', 'english', 'nepali'];
let poppedValue = bookList.pop();
console.log(bookList);
console.log(poppedValue);

let removedValue = bookList.shift();
console.log(removedValue);

bookList.unshift('biology');
console.log(bookList);

let fruitsName = ['apple', 'bannana', 'orange', 'mango', 'carrot'];
let lastRemoved = fruitsName.pop();
let firstRemove = fruitsName.shift();
fruitsName.unshift('strawbreey');
console.log(lastRemoved);
console.log(firstRemove);
console.log(fruitsName);

let myArray = [1, 2, 3, 4, 5, 6, 7, 5, 8, 9, 10];
console.log(myArray[myArray.length - 1]);
console.log(myArray.indexOf(5));
console.log(myArray.lastIndexOf(5));
myArray[myArray.indexOf(6)] = 16;
console.log(myArray);
console.log(myArray.indexOf(100));//-1

//slice
let myArrayChunk = myArray.slice(2, 5);
console.log(myArrayChunk);

//splice
myArray.splice(0, 3);
console.log(myArray);

//Array spread
let firstArray = [1, 2, 3, 4, 5];
let secondArray = [6, 7, 8, 9, 10];
let joinedArray = [...firstArray, ...secondArray];
console.log(joinedArray);
console.log(...firstArray);

//array destructuring
let [first1, , , fourth] = ['ram', 'hari', 'gita', 'sita'];
console.log(first1);
console.log(fourth);

let [first, second, ...rest] = ['ram', 'hari', 'gita', 'sita'];
console.log(...rest);

let [first2, second2, third, , , , , eight, nine, ten] = ['samikshya', 'nanu', 'samu', 'ram', 'hari', 'sita', 'gita', 'rita', 'shyam', 'suman'];
console.log(first2);
console.log(second2);
console.log(third);

console.log(eight);
console.log(nine);
console.log(ten);


//assignment-day 18

let myNumber = [1, 2, 3, 4, 5];
let sum = 0;
for (let i = 0; i < myNumber.length; i++) {
    sum = sum + myNumber[i];
}
console.log(sum); //15 output

let myArrayList = ['samikshya', 'suman', 'sanjay', 'sujan', 'sandesh'];
for (let i = 0; i < myArrayList.length; i++) {
    console.log(myArrayList[i]);
}

//wap to primt the even number
let myList = [100, 101, 102, 103, 104, 105];
let sum1 = 0;
for (let i = 0; i < myList.length; i++) {
    if (i % 2 == 0) {
        sum1 = sum1 + myList[i];
    }
}
console.log(sum1);//306 output



//wap to print the odd number
let myList1 = [1000, 1001, 1002, 1003, 1004, 1005, 1006, 1007, 1008, 1009];
let sum2 = 0;
for (let i = 0; i < myList1.length; i++) {
    if (i % 2 != 0) {
        sum2 = sum2 + myList1[i];
    }
}
console.log(sum2);//5025 output


//wap to print the greatest number 
let myNumber1 = [499, 100, 1000, 2, 10];
let greatest = myNumber1[0];
let smallest = myNumber1[0];
for (let i = 0; i < myNumber1.length; i++) {
    if (myNumber1[i] > greatest) {
        greatest = myNumber1[i];
    }
    if (myNumber1[i] < smallest) {
        smallest = myNumber[i];
    }
}
console.log(greatest);
console.log(smallest);


//wap to reverse an array
let myArrayList1 = [499, 100, 1000, 2, 10];
let reverse = [];
for (let i = 0; i < myArrayList1.length; i++) {
    reverse.unshift(myArrayList1[i]);
}

console.log(reverse);


