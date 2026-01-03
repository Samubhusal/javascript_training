//LOCALSTORAGE=>used to store data for long time 
//COOKIES=>small chunk of code that stores in the client browse storage.
//cookies=>used to store private and sensitive credentials .
//indexed db=> like mysql database for browser used to store data for long time.
//set->write data
//get->read data

//PCI-DSS STANDARD->trustworthy stanard for payments 
//OWSAP SECURITY-> Top institution for cyber security

//---------------------LOCAL STORAGE-----------------------------
//localstorage.setItem(key,value)
// localStorage.setItem('name','samikshya');

//to get the item from local storage database
// const data=localStorage.getItem('name');
// console.log(data);

//project to create 

// let inputBox=document.getElementById('todoInput');
// let result=document.getElementById('result');
// let addButton=document.getElementById('btn');
// let DataBase=JSON.parse(localStorage.getItem("myitems")) || [];
// showOnScreen();//update data on screen ,on initial load
// // let result = document.getElementById('display');

// addButton.addEventListener("click",function(){
//     const TodoText=inputBox.value //get value fron input box 
//     DataBase.push(TodoText); //store the fetched value to an array
//     // console.log(DataBase);

//     //to reset input value after submit,to reset from
//     inputBox.value="";
//     showOnScreen(); //update data on screen after submit too

//     //local storage ma permanently save garni
//     let myJson=JSON.stringify(DataBase);//convert array/object to json
//     localStorage.setItem('myitems',myJson);

//     //result.innerHTML= DataBase;
// })
// function showOnScreen(){
//      let finalResult="";
//     DataBase.forEach(function(value){
//         finalResult=finalResult+value+"\n";
//     })
//     result.innerText=finalResult;
// }

//stopwatch

const hour= document.getElementById("hours");
const minutes=document.getElementById("minutes");
const seconds= document.getElementById("seconds");
const startBtn=document.getElementById('startBtn');
const stopBtn=document.getElementById('stopBtn');
const resetbtn=document.getElementById('resetBtn');

//inital time
let Hour=0;
let Minutes=0;
let Second=0;
let timerId;

startBtn.addEventListener("click",function(){
   timerId= setInterval(() => {
        Second=Second+1;
        if(Second==60){
            Minutes=Minutes+1;
            Second=0;
        }
        showOnScreen();
    }, 1000);

})
stopBtn.addEventListener("click",function(){
    clearInterval(timerId);
})
function showOnScreen(){
    hour.innerText=Hour+":";
    minutes.innerText=Minutes+":";
    seconds.innerText=Second;

}