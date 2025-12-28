//find the length of array without using.length
let myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let length = 0;
let index = 0;
let element = myArray[index];

while (element != undefined){
    length++;
    index++;
    element = myArray[index];
}

console.log(length);




//assignment

//1.print all the element of an array
let array = [1, 2, 3, 4, 5];
array.forEach((element) => {
    console.log(element);
});

//2.find the length of an array without using a built-in function/
let arr = [1, 2, 3, 4, 5];
length = 0;
for (let i = 0; i < arr.length; i++) {
    length++;
}
console.log(length);

//3.insert an element at a specific position in an array
let arrayElement = [1, 2, 3, 4, 5];
let elementToInsert = 6;
let positionToInsert = 2;
let newArray = [arrayElement.slice(0, positionToInsert), elementToInsert, ...arrayElement.slice(positionToInsert)];
console.log(newArray);

//4.delete an element from an array
let elementArray = [1, 2, 3, 4, 5];
let deleteElement = 3;
let newArr = elementArray.filter((element) => element !== deleteElement);
console.log(newArr);

//5.sind the sum of all element in an array/
let myNumber = [1, 2, 3, 4, 5];
let sum = 0;
for (let i = 0; i < myNumber.length; i++) {
    sum = sum + myNumber[i];
}
console.log(sum);

//6.find the average of all elemt in an array
let arr6 = [1, 2, 3, 4, 5];
let average = 0;
for (let i = 0; i < arr6.length; i++) {
    average = average + arr6[i] / arr6.length;
}
console.log(average);

//7.find the maximum elemt in an array
let arr7 = [1, 2, 3, 4, 5];
let maxElement = arr7.reduce((acc, curr) => acc + curr, 0);
console.log(maxElement);

//8.find the minimum element in an array
let arr8 = [5, 2, 8, 1, 4];
let minElement = arr8.reduce((acc, curr) => (curr < acc ? curr : acc), arr8[0]);
console.log(minElement);

//9 reverse the elements of an array/
let arr9 = [1, 2, 3, 4, 5];
let reversedArr = arr9.reverse();
console.log(reversedArr);

//10.count positive and negative numbers in an array
let arr10 = [1, -2, 3, -4, 5, -6];
let count = arr10.reduce(
    (acc, curr) => {
        if (curr > 0) {
            acc.positive++;
        } else if (curr < 0) {
            acc.negative++;
        }
        return acc;
    },
    { positive: 0, negative: 0 }
);

console.log(count);

//11.count even and odd numbers in an array/
let arr11 = [1, 2, 3, 4, 5, 6];
let count1 = arr11.reduce(
    (acc, curr) => {
        if (curr % 2 === 0) {
            acc.even++;
        } else {
            acc.odd++;
        }
        return acc;
    },
    { even: 0, odd: 0 }
);
console.log(count);

//12.find the second largest element in an array
let myNumber1 = [5, 2, 6, 1, 4];
let largest = myNumber1[1];
for (let i = 0; i < myNumber1.length; i++) {
    if (myNumber1[i] > largest) {
        largest = myNumber1[i];
    }
}
console.log(largest);

//13.find the second smallest element in an array
let secondNumber = [5, 2, 6, 1, 4];
let smallest = secondNumber[1];
for (let i = 0; i < secondNumber.length; i++) {
    if (secondNumber[i] > smallest) {
        smallest = secondNumber[i];
    }
}
console.log(smallest);

//14.copy all elements of an array to another array
let arr14 = [1, 2, 3, 4, 5];
let copiedArr = [...arr14];
console.log(copiedArr);

//15.check if an array contains a specific element
let array15 = [1, 2, 3, 4, 5];
let containsElement = array15.includes(3);
console.log(containsElement);

let doesNotContainElement = array15.includes(6);
console.log(doesNotContainElement);


//16 count the frequency of each element in an array 
let arr15 = [1, 2, 3, 4, 5, 3, 2];
let frequency = arr15.reduce((acc, curr) => {
    acc[curr] = (acc[curr] || 0) + 1;
    return acc;
}, {});
console.log(frequency);

//17. remove  duplicate elements from an array
let arrRemove = [1, 2, 3, 4, 5, 3, 2];
let uniqueArr = [...new Set(arrRemove)];
console.log(uniqueArr);

//18 find the index of the first occurrence of a given element
let arr17 = [1, 2, 3, 4, 5, 3];
let elementToFind1 = 3;
let firstIndex = arr17.indexOf(elementToFind1);
console.log(firstIndex);

//19 find the index of the last occurrence of a given element
let arr19 = [1, 2, 3, 4, 5, 3];
let elementToFinds = 3;
let lastIndex = arr19.lastIndexOf(elementToFinds);
console.log(lastIndex);

//20.swap the first and last elements of an array
let arr20 = [1, 2, 3, 4, 5];
let swapArr = [...arr20];
swapArr[0] = arr20[arr20.length - 1];
swapArr[arr20.length - 1] = arr11[0];
console.log(swapArr);

//21.merge two arrays into third array
const arr21 = [1, 2, 3];
const arr22= [4, 5, 6];
const mergedArr = [...arr21,...arr22];
console.log(mergedArr);

//22. shift all elements to the right by one position
const arrayShift = [1, 2, 3, 4, 5];
const shiftedArr1 = [arrayShift[arrayShift.length - 1]].concat(arrayShift.slice(0, arrayShift.length - 1));
console.log(shiftedArr1);

//23.shift all elements to the left by one position
const arr23 = [1, 2, 3, 4, 5];
const shiftedArr = arr23.slice(1).concat(arr23[0]);
console.log(shiftedArr);

//24 check if an array is sorted in (ascending  or desending) order
// const arr24= [1, 2, 3, 4, 5];
// const isSorted = arr24.every((value, index, array) => {
//   if (index === 0) return true;
//   return value >= array[index - 1];
// });
// console.log(isSorted);

//25.sort the array in descending order 
let arr25=[1,2,3,4,5];
let sortedArr=arr25.sort((a,b)=>a-b);
console.log(sortedArr);










