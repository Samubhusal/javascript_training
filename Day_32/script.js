/** @type {HTMLHeadingElement} */

// ..............LET'S HEAD TOWARDS DOM(DOCUMENT OBJECT MODEL).............


//select the html element through document object
//you can select with these methods:
//classname,id,tag name,parent child relationship

// //GetElementBy____

console.log(document);
console.log(typeof document);

const myParagraphTag=document.getElementById('Name');
console.log(myParagraphTag);

const ParagraphTag=document.getElementsByClassName('p');
console.log(ParagraphTag);

const BCA = document.getElementsByClassName('BCA')[1]; //->Node list
BCA.style.color = "red";
BCA.style.backgroundColor = "skyblue";
BCA.style.fontSize = "30px";
BCA.style.padding = "30px";
BCA.textContent = "BCA second sem.";
console.log(BCA);

const helloDiv=document.getElementsByClassName('Hello')[0];  //to insert html element inside div
helloDiv.innerHTML=`<h1>Hello,My Name is Samikshya </h1>
<P>model,of the years.</P>`;

helloDiv.style.color="red";

const Paragraph= helloDiv.getElementsByTagName('p')[0];
Paragraph.style.color="green";
Paragraph.style.fontSize="30px";

console.log(helloDiv);

// const div=document.createElement("div");
// div.classList.add("mydiv");
// document.body.appendChild(div);





