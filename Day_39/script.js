//API=Application programming interface
//use fetch to fetch 
//print elements in console

// fetch('https://fakestoreapi.com/products')
// .then((res)=>{
//     return res.json();
// })
// .then((data)=>{
//     console.log("Fetched Posts:");
//    data.forEach(post =>
//     console.log(post.title));

// const postList=document.getElementById('postList');
// data.forEach(post=>{
//     const li=document.createElement('li');
//     li.textContent=post.title;
//     postList.appendChild(li);
// });
// })
// catch((error)=>{
//     console.log("Error fetching data:",error);
// });

class person{
    name;
    address;
    phoneNumber;

    constructor(name,address,phoneNumber){//class bitra object construct garxa 
        this.name=name;
        this.address=address;
        this.phoneNumber=phoneNumber;
    }
}

let person1=new person('samikshya','butwal','987654310');
let person2=new person('Suman','london','9711203509');

console.log(person1);
console.log(person2);
// const person1=new person();
// console.log(person1.name);
// console.log(person1.address);
// console.log(person1.phoneNumber);

class Animal{
    name;
    type;
    scientificName;

    constructor(name,type,scientificName){
        this.name=name;
        this.type=type;
        this.scientificName=scientificName;
    }
}
let animal1=new Animal('Tiger','wild','Panthera tigris');
let animal2=new Animal('Dog','pet','canis lupus familiaris');
console.log(animal1);
console.log(animal2);

class students{//big application terminated to the short form 
    name;
    id;
    course;

    constructor(name,id,subject){
        this.name=name;
        this.id=id;
        this.subject=subject;
    }
}
let students1=new students('samikshya','299','BCA');
let students2=new students('suman','283','BBA');
let students3=new students('anisha','249','MBA');
let students4=new students('aastha','235','BBS');
let students5=new students('bhawana','345','biology');
console.log(students1);
consoel.log(students2);
consoel.log(students3);
consoel.log(students4);
consoel.log(students5);


