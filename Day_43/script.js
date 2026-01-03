// Swal.fire({
//     title:'Are you sure',
//     text:'you wont be able to revert this!',
//     icon:'question',//warming,error,success,info,question
// });

//take input prompt from the user and use if condition and if 100 is more than take swal error and 100 is less then  show sucess
// let userInput=document.getElementById('userAge');
// function inputAge(){
//     let number=userAge.value;
//     if(number<100){
//         Swal.fire({
//     title:`sorry the number ${number} is mistak`,
//     text:'unable to exist',
//     icon:'warning',
// });
//     }else{
//        Swal.fire({
//     title:`yes your number ${number} is able`,
//     text:'able to exist',
//     icon:'success',
// }); 
//     }

// }

// let userAge=document.getElementById('userAge');
// function inputAge(){
//     let age=userAge.value;
//     if(age<20){
//     Swal.fire({
//     title:`sorry you are ${age} years old`,
//     text:'you wont be able to vote yet!',
//     icon:'warning',
//     // timer:"2000",
//     // draggable:true,use to move 
//     // confirmButtonText:'Yes,do it!',
//     // showCancelButton:true,
// })
//  }else{
//     Swal.fire({
//     title:`congratulations!you are ${age} years`,
//     text:'you wont be able to revert this!',
//     icon:'sucess',
//     // timer:"1000",
//     // draggable:true,
//     confirmButtonText:'Yes,do it!',
//     showCancelButton:true,
//     footer:'<a href="linkrakhe" target="_blank">Check out more</a>'
// });
//  }
// };

// function showImage(){
//     swal.fire({
//         imageUrl:"c:\Users\NITROV\Pictures\download.jpeg",
//         imageHeight:200,
//         imageWidth:200,
//         imageAlt:'Custom image',
//         title:'Custom image',
//         draggable:true,
//         //
//         confirmButtonText:'Save image',
//         //
//         showCancelButton:true,
//         cancelButtonText:'cancel',
//         showCloseButton:true,
//         //
//         showDenyButton:true,
//         denyButtonText:'close',
//     })
// }

// swal.fire({
//     icon:'error',
//     title:'Are You Sure?',
//     text:'No Title Here',
//     confirmButtonText:'yes',
//     showDenyButton:true,
//     denyButtonText:'no',
//     // position:"top-left",//bottom-left//top-left
//     // Html:`
//     // <h1>HTML RENDER</h1>
//     // `
// }).then((res)=>{
//     if(res.isConfirmed){
//         swal.fire({
//             icon:'success',
//             title:'Are you sure?',
//             text:'yes yes',
//         })
//     }else{
//         swal.fire({
//             icon:"error",
//             title:"you clicked No",
//             text:"No",
//         })
//     }
// })


// swal.fire({
//     icon:'question',
//     title:' Your Name?',
//     text:'Full Name',
//     input:"text",
//     inputPlaceholder:"Enter Your Name here",
//     showCancelButton:true,
//     cancelButtonText:'cancel',
// })
// .then((res)=>{
//     if(res.isConfirmed && res.value){ 
//         Swal.fire({
//             icon:"info",
//             text:`HELLO ${res.value}`
//         })
//     }else if(res.isDismissed){
//         Swal.fire({
//             icon:"warning",
//             text:`Operation Aborted`
//         })
//     }
// })

// let userAge=document.getElementById('userAge');

 swal.fire({
    icon:'question',
    title:'your age',
    text:'improve age',
    input:"text",
    inputPlaceholder:"Enter your age here?",
    showCancelButton:true,
    cancelButtonText:'cancel',
 })
 function inputAge(){
let age=userAge.value
.then((res)=>{
    if(res.isConfirmed && res.value){ 
        Swal.fire({
            icon:"info",
            text:`HELLO ${age}`
        })
    }else if(res.isDismissed){
        Swal.fire({
            icon:"warning",
            text:`Operation Aborted`
        })
    }
})
 }