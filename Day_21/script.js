// let myObject = {
//     name: 'samikshya',
//     from: 'butwal',
//     email: 'samikahyabhusal066@gmail.com',
//     phone: 9807654321,
//     newone:'simm',
// };
// //print each keys and values for the given object 
// console.log(myObject.name);
// console.log(myObject.from);
// console.log(myObject.email);
// console.log(myObject.phone);

// // console.log(Object.keys(myObject));
// // console.log(Object.values(myObject));

// let myentries = Object.entries(myObject);
// for (let i = 0; i < myentries.length; i++) {
//     let [key, value] = myentries[i];
//     console.log(`${key}:${value}`);
// }

// // for(let key in myObject){
// //     console.log(key+':'+myObject[key]);
// // }

// //check wheather particular key is exist or not
// console.log('name' in myObject);
// console.log('from' in myObject);
// console.log('email' in myObject);
// console.log('phone' in myObject);

// //NESTED OBJECTS /NESTED ARRAYS--------------->MOSTILY USED IN REAL WORLD

// //create nested objects
// //create object name person 
// //break name property into firstname,middlename,lastname
// //add location, break down into permanent nad temporary
// //add colors,store 3 favourite color of user in list
// //add parential_info property ,break down into father and mother name

// //at last print all of them

// let myperson={
//     name:{
//         firstName:'samikshya',
//         middleName:'kumari',
//         lastName:'bhusal',
//     },
//     location:{
//         permanent:'butwal',
//         temporary:'palpa',
//     },
//     color:['blue','yellow','green'],
//     parential_info:{
//         father:'Deepak Bhusal',
//         Mother:'Kalpana Bhusal',
//     }
// };
// console.log(myperson);
// console.log('first Name:',myperson.name.firstName);
// console.log('Middle Name:',myperson.name.middleName);
// console.log('last Name:',myperson.name.lastName);
// console.log('permanent address:',myperson.location.permanent);
// console.log('temporary address:',myperson.location.temporary);
// console.log('favourite colors:',myperson.color);
// console.log('Father\'s name:',myperson.parential_info.father);
// console.log('mother\'s name:',myperson.parential_info.Mother);


//assignment


//1.create a JavaScript object named student with the following structure:
// name (string)
// id (number)
// address (object): street, city, zip
// Faculty 
// course :courseName
// Subjects(object):subjectName,subjectCode(min6)
// contact (object): email, phone1,phone2


const student = {
  name: "samikshya bhusal",
  id: 123456,
  address: {
    street: "traffic chock",
    city: "Butwāl",
    zip: "32907"
  },
  faculty: "Science",
  course: {
    courseName: "Computer Science",
    department: "Science" 
  },
  subjects: [
    { subjectName: "Mathematics", subjectCode: "CS101" },
    { subjectName: "Physics", subjectCode: "CS102" },
    { subjectName: "microprocessor", subjectCode: "CS103" },
    { subjectName: "english", subjectCode: "CS104" },
    { subjectName: "c", subjectCode: "CS106" },
  ],
  contact: {
    email: "samikahyabhusal066@gmail.com",
    phone1: "+977-9812345678",
    phone2: "+977-9823456789"
  }
};

//2.Given the student object you created, how do you access the student’s zip code and the course grade?


const zipCode = student.address.zip;
console.log(zipCode); 

// Assuming the course grade is stored in the course object
const courseGrade = student.course.grade;
console.log(courseGrade); 

//3.Add a new nested property department inside the course object with the value "Science".


student.course.department = "Science";
console.log(student.course.department);

//4.Change the student’s email address inside the contact object to "student@example.com".

student.contact.email = "student@example.com";
console.log(student.contact.email);


//5.Remove the phone property from the contact object.
delete student.contact.phone1;
delete student.contact.phone2;
console.log(student.contact); 







