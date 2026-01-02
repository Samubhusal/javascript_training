// const firstNum = document.getElementById("firstNumber");
// const operator = document.getElementById("operator");
// const secondNum = document.getElementById("secondNumber");
// const input = document.getElementById("input");

// let randomNum1 = Math.floor(Math.random() * 10);
// let randomNum2 = Math.floor(Math.random() * 10);

// firstNum.textContent = randomNum1;
// secondNum.textContent = randomNum2;
// operator.textContent = "+"
// let ans = randomNum1 + randomNum2;

// function main() {
//     if (input.value == ans) {
//         console.log("Correct");
//     }

//     else {
//         console.log("Not correct");

//     }
// }

//JSON ->JAVASCRIPT OBJECT NOTATION


let container=document.getElementsByClassName("container")[0];
fetch('https://fakestoreapi.com/products')
.then((res)=>{
    return res.json();//data fetch,pretty print
})
.then((data)=>{
    let NewHtmlWithData=data.map((value)=>{
        return`
        <div class="product">
            <div class="product_image">
                <img src=${value.image}
                    alt="" />
            </div>
            <div class="product_detail">
                <h1>${value.title.substring(0,20)}</h1>
                <p class="description">
                    ${value.description.substring(0,100)}
                </p>
                <h3 class="price">$${value.price}</h3>
            </div>
        </div>
    </div>`
    });
    container.innerHTML=NewHtmlWithData.join('');
});



function generateOTP(){
     let generateOTP="";
    for(let i=0;i<6;i++){
        generateOTP+=Math.floor(Math.random()*10);
    }
    console.log("Generated OPT:",generateOTP);
    // alert("OPT generated and logged in console.");
}

// function submitOTP(){
//     const userOPT=document.getElementById("otpInput").value;
//     const messagebox=document.getElementById("message");
//     if(userOPT===generateOTP){
//         messagebox.textContent="Logged in";
//         messagebox.style.color="green";
//     }else{
//         messagebox.textContent="Incorrect OTP";
//         messagebox.style.color="red";
//     }
// }