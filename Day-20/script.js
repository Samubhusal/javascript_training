//SORTING
let number=5;
let array=[5,1,5,6,3,1];

console.log(array.includes(500));//true /false output
if(array.includes(number)){
    //put your atatement here
    console.log(`${number} exist in the array`);
}else{
    //put your atatement here
    console.log(`${number}doesnot exist in the array`);
}

//------------------OBJECTS------------------
let person={
    name:'samikshya',
    age:20,
    number:9876543210,
    address:'hospitalline',
    country:'Nepal',
}//ACCESSING OBJECT
//TWO SYNTAX

console.log(person['name']);
console.log(person['age']);
console.log(person['number']);
console.log(person['address']);
console.log(person['country']);

let myObject={
    'first name':'Samikshya',
    'last name':'Bhusal',
};
console.log(myObject['first name']);
console.log(myObject['last name']);

let myAnotherObject={
    name:'sami',
    address:'nepal',
    rollno:13,
}
console.log(myAnotherObject);
myAnotherObject.name='sann';//update property name->sann
console.log(myAnotherObject);

//to delete property
//syuntax:delete variable .propertyName

delete myAnotherObject.name;//delete name property
console.log(myAnotherObject);

let animalBio={
    name:'parrot',
    type:'bird',
    color:'green',
    class:'aves',
    weight:0.7-1.5,

}
console.log(animalBio['name']);
console.log(animalBio['type']);
console.log(animalBio['color']);
console.log(animalBio['class']);
console.log(animalBio['weight']);
//console.log(animalBio['hasfur']);
console.log(animalBio);
//animalBio['has fur']:'yes',

animalBio.weight='100';
console.log(animalBio);

delete animalBio.color;
console.log(animalBio);


let myThirdObject={
    name:'samikshya',
    dob:2005,
}
let a=2025-myThirdObject.dob;
myThirdObject.a=a;
console.log(myThirdObject.a);



//-----------------------OBJECT DESTRUCTURING------------------
let {
    address:myAddress,
    name,
    doesnotexist,

}={
    name:'samikshya',
    address:'butwal',
};

console.log(myAddress);
console.log(name);
console.log(doesnotexist);

//assignment
//1. create an object called person with properties:name,age and city
let personObject={
    name:'Sandesh',
    age:18,
    city:'Butwal',
}
console.log(personObject['name']);
console.log(personObject['age']);
console.log(personObject['city']);
//2
personObject.email='samikshyabhusal066@gmail.com';
//3
personObject.city='New York';
console.log(personObject.city);
//4
delete personObject.age;
//5
let book={};
console.log(book);//array-index aanu sar chalxa object-key aanu sar chalxa
//6
book.title = "The Alchemist";//book['tittle']
book.author = "Paulo Coelho";
console.log(book);

// 7. Access the name property from the person object using dot notation.
console.log(personObject.name); 

// 8. Access the email property from the person object using bracket notation.
console.log(personObject["email"]); 

// 9. Check if the name property exists in the person object using the in operator.
console.log("name" in personObject); 
