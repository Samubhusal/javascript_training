//reduce result to the single accumulator 

//wap to add even number only using reduce
let array = [1, 2, 3, 4, 5, 6, 7];
let evenResult = array.reduce(function (firstvalue, current) {
    if (current % 2 == 0) {
        return firstvalue + current;
    } else {
        return firstvalue;
    }
}, 0);
console.log(evenResult);


//wap to add odd number only using reduce
let array1 = [1, 2, 3, 4, 5, 6, 7];
let oddResult = array.reduce(function (previousvalue, currentvalue) {
    if (currentvalue % 2 !== 0) {
        return previousvalue + currentvalue;
    } else {
        return previousvalue;
    }
}, 0);
console.log(oddResult);


//wap to subtract only those number which is divisible by 3,use reduce
let Arrays = [3, 4, 5, 6, 7, 8];
let divisibleResult = array.reduce(function (preValue, currValue) {
    if (currValue % 3 == 0) {
        return preValue - currValue;
    } else {
        return preValue;
    }
}, 0);
console.log(divisibleResult);

//----------------------FILTER-------------------------------------
//TO FILTER OUT ELEMENTS,AND RETURN RESULT IN ARRAY

//callback=>value return 
//predicate-->return boolean

//predicate the function that always return  boolean value
//callback is a function that can return any arbitary value


const array2 = [10, 20, 30, 40, 50, 60];
let filteredOutResult = array2.filter(function (value) {
    if (value >= 40) {
        return true;
    } else {
        return false;
    }
});

console.log(filteredOutResult);

let persons = [
    {
        name: 'samikshya',
        age: 20,
    },
    {
        name: 'anisha',
        age: 30,
    },
    {
        name: 'nisha',
        age: 30,
    },
];
const personsResult = persons.filter(function (values) {
    if (values.age >= 30) {
        return true;
    } else {
        return false;
    }
});
console.log(personsResult);

//-------------------MATH OBJECT---------------------

let random = Math.random();//produce number between 0and 1 but never be 0 and 1
console.log(random);

let trunvatedValue = Math.trunc(20.20);//return integral part only
console.log(trunvatedValue);

let FloorValued = Math.floor(20.7);
let ceilValued = Math.ceil(20.7);
console.log(FloorValued);
console.log(ceilValued);

let absoluteValue = Math.abs(-20);
console.log(absoluteValue);

let cosValue = Math.cos(0);
let sinValue = Math.sin(0);
let tanValue = Math.tan(45);
console.log(tanValue);
console.log(sinValue);
console.log(cosValue);

const VALUE_OF_PT = Math.PI;
console.log(VALUE_OF_PT);

const squareRoot = Math.sqrt(16);
console.log(squareRoot);

const cubeRoot = Math.cbrt(9);
console.log(cubeRoot);

const logValue = Math.log(10);
console.log(logValue);

const ExponentialValue = Math.exp(20);
console.log(ExponentialValue);

const power = Math.pow(2, 3)
console.log(power);

const RoundOff = Math.round(20);
console.log(RoundOff);

const MinimumValue = Math.min(1, 2, 3);
console.log(MinimumValue);

const MaximumValue = Math.max(3, 4, 5, 6);
console.log(MaximumValue);


let num = Math.trunc(Math.random() * 200);
console.log(num);