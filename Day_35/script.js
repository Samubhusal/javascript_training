// const date=new Date();
// console.log(date.getTime());
// console.log(date.getFullYear());
// console.log(date.getDay());
// console.log(date.getMonth());
// console.log(date.getHours());
// console.log(date.getMinutes());
// console.log(date.getSeconds());

// const clock=document.getElementById('clock');

// setInterval(() => {
//     const date= new Date();
//     const currentHour=date.getHours();
//     const currentMinutes=date.getMinutes();
//     const currentSeconds=date.getSeconds();

//     const formattedTime=`${currentHour}:${currentMinutes}:${currentSeconds}`;
//     clock.innerText=formattedTime;
// },1000);


//KEYBOARD EVENTS                   //MOUSE EVENTS                                   
//ONCHANGE                          //CLICK
//KEYPRESS                          //DOUBLECLICK                          
//KEYUP                             //ONMOUSEOVER
//ONMOUSERELEASE
//right\left click
//scroll

// const inputBox=document.getElementById('datasource');
// inputBox.addEventListener('change',(e)=>{
//     const data=e.target.value;
//     console.log(data);
// })

// const inputBox1=document.getElementById('datasource')[0];
// inputBox1.addEventListener('change',(e)=>{
//     const data=e.target.value;
//     console.log(data);
//     inputBox1.value='';
// });

// const firstName= document.getElementById('firstname');
// const lastName= document.getElementById('lastname');
// const btn= document.getElementById('btn');
// btn.addEventListener('submit',(e)=>{
//     const data=e.preventDefault();//prevents page reload
//     console.log(data);
//     const first=firstName.value;
//     const last=lastName.value; 
//     console.log(`first Name:${first},LastName:${last}`);

//     firstName.value='';
//     lastName.value='';
// });

const showBtn=document.getElementById('showBtn');
const output=document.getElementById('output');

const alphabetArray=Array.from({length:26},(_,i)=>
    String.fromCharCode(65+i)
);

showBtn.addEventListener('click',()=>{
    output.innerHTML='';
    alphabetArray.forEach(letter =>{
        const span=document.createElement('span');
        span.textContent=letter;
        output.appendChild(span);
    });
});

// let showBtn = document.getElementById('showBtn');
// let output = document.getElementById('output');

// showBtn.onclick = function() {
//   output.innerHTML = '';

//   for (let i = 65; i <= 90; i++) {
//     let letter = String.fromCharCode(i);
//     let span = document.createElement('span');
//     span.textContent = letter;
//     output.appendChild(span);
//   }
// };
