const emailBox=document.getElementById('email');
const passwordBox=document.getElementById('password');
const submitBtn=document.getElementById('submitBtn');

//error fields
const emailErrorField=document.getElementById('emailError');
const passwordErrorField=document.getElementById('passwordError');

submitBtn.addEventListener('click',function(){
    const emailValue= emailBox.value;
    const passwordValue=passwordBox.value;

    if(!emailValue){
        emailErrorField.innerText='username cannot be empty';
        emailErrorField.style.display='block';
    }

    if(!passwordValue){
        passwordErrorField.innerText='password cannot be empty';
        passwordErrorField.style.display='block';
    }
    if(passwordValue && passwordValue.length <6){
        passwordErrorField.innerText='password length must be greater than 6';
        passwordErrorField.style.display='block';
    }

});