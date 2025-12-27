//let studentList=['apple','ball','cat','dog'];
// let poppedValue=studentList.pop();//remove  from last
// console.log(studentList);//{'abc','cde'}
// console.log(poppedValue);

// let removedValue=studentList.shift();//removed first value
// console.log(removedValue);

// studentList.unshift('added on first');//added on first place
// console.log(studentList);

//let subjectCode=['Maths','English','science','nepali','computer'];
// let lastRemoved=subjectCode.pop();
// console.log(subjectCode);
// console.log(lastRemoved);
//let firstRemove=subjectCode.shift();
//console.log(firstRemove);

// subjectCode.unshift('modern physics');
// console.log(subjectCode);

//let myArray=[1,2,3,4,5,6,7,5,8,9,10];
// console.log(myArray[myArray.length-1]);
// console.log(myArray.indexOf(5));
// console.log(myArray.lastIndexOf(5));

// myArray[myArray.indexOf(6)]=16;
// console.log(myArray);

//let myArrayChunk=myArray.slice(2,5);//(start,end-1,IMMUTABLE)
// console.log(myArrayChunk);

// console.log(myArray);
// console.log(myArray.indexOf(100));//-1




//splice

//myArray.splice(0,3);//MUTABLE
//console.log(myArray);//original value change garxa

//------------------------------------ARRAY DESTRUCTURING------------------------
// let [ first, , ,fourth]=['ram' ,'hari','sita','gita'];
// console.log(first);
// console.log(fourth);

// let [ first,second,...rest]=['ram' ,'hari','sita','gita'];
// console.log(...rest);

// let [first,second,third, , , , , eight,nine,ten]=['samikshya','nanu','samu','ram' ,'hari','sita','gita','rita','shyam','suman'];
// console.log(first);
// console.log(second);
// console.log(third);

// console.log(eight);
// console.log(nine);
// console.log(ten);


//--------------------------ARRAY SPREAD---------------------------------------
// let firstArray=[1, 2 ,3 ,4 ,5];
// let secondArray=[6 ,7 ,8 ,9 ,10];
// let joinedArray=[...firstArray, ...secondArray];
// console.log(...firstArray);//this is called spread
