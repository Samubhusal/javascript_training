// const h1=document.getElementsByClassName("heading")[0];
// h1.classList.add('newclass');

//..................INTRO TO EVENT HANDLING and EVENTS......................
// const btn=document.getElementById('btn');
// var divBox=document.getElementById('box');

// btn.addEventListener('click',function () {
//     // console.log('Button Clicked');
//     divBox.style.backgroundcolor = "black";
// });


// let colour=['red','yellow','black','brown'];
// const btn1=document.getElementById('btn');
// const box=document.getElementById('box');

// btn1.addEventListener('click',function () {
//     let result=Math.trunc(Math.random() *colour.length); 
//     box.style.backgroundColor=colour[result];
// });

// const countries = [
//   "United States",
//   "Canada",
//   "Mexico",
//   "Brazil",
//   "Argentina",
//   "United Kingdom",
//   "Germany",
//   "France",
//   "Italy",
//   "Spain",
//   "Russia",
//   "China",
//   "Japan",
//   "South Korea",
//   "India",
//   "Australia",
//   "New Zealand",
//   "South Africa",
//   "Egypt",
//   "Nigeria",
//   "Kenya",
//   "Saudi Arabia",
//   "Turkey",
//   "Indonesia",
//   "Thailand"
// ];

// const btn2=document.getElementById('btn');
// const box2=document.getElementById('box')[0];
// let result=Math.trunc(Math.random() *countries.length); 
// btn2.addEventListener('click',function () {
//   let msg=prompt("Enter your Name");
//     box2.style.backgroundColor=colour[result];
//     box2.style.padding = '30px';
//     box2.style.border = "2px solid black";
//     box2.style.width = "350px"
//     box2.style.margin = "10px"
//     box2.style.fontSize = "30px"
//     box2.style.color = "White"
//     box2.innerHTML = `${msg} will be in ${countries[result]}`;

// });


let users=[],rotation=0;
const wheel =document.getElementById('wheel');
const userlist=document.getElementById('userList');


function addUser() {
const name = prompt("Enter user name:");
 if (name) {
        users.push(name);
        drawWheel();
        updateUserList();
  }
}

function updateUserList() {
    userList.innerHTML ='';
      users.forEach(user => {
        const li = document.createElement('li');
        li.textContent = user;
        userList.appendChild(li);
    });
}

function drawWheel(){
  wheel.innerHTML='';
  const count=Math.max(users.length,3);//minimum 3 segments
  const angle=360/count;

  for(let i=0;i<count;i++){
    const segment = document.createElement('div');
    segment.className = 'segment';
    segment.style.transform = `rotate(${i * angle}deg) skewY(${90 - angle}deg)`;
    segment.style.background = `hsl(${i * 360 / count}, 70%, 60%)`;
  
    const label = users[i] ?? '';
    segment.innerHTML = `<div style="transform: skewY(${-(90 - angle)}deg) rotate(${angle / 2}deg); transform-origin: left; width: 100px;">${label}</div>`;
     wheel.appendChild(segment);
  }
}
   function spinWheel() {
      if (!users.length) {
        alert("Add at least one user first.");
        return;
      }

      const index = Math.floor(Math.random() * users.length);
      const segmentAngle = 360 / Math.max(users.length, 3);
      const stopAngle = 360 - (index * segmentAngle + segmentAngle / 2);
      const spins = 5;
      const totalRotation = spins * 360 + stopAngle;

      rotation += totalRotation;
      wheel.style.transform = `rotate(${rotation}deg)`;

      setTimeout(() => {
        document.getElementById('winner').textContent = `🎉 Winner is: ${users[index]} 🎉`;
      }, 4000);
    }