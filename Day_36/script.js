function generatePassword() {
            const lengthOfPassword = 8
            const alfaNumeric = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+-=[]{}|;:,.<>?';
            let password = '';

            for (let i = 0; i < lengthOfPassword; i++) {
                const char = Math.floor(Math.random() * alfaNumeric.length);
                password += alfaNumeric[char];
            }
            document.getElementById('passwordField').value = password;
        }

        function copyPassword() {
            const password = document.getElementById('passwordField').value;
                navigator.clipboard.writeText(password);
        }


// STTP METHOD
// GET PUSH PUT PATCH DELETE
// API= APPLICATION PROGRAMMING INTERFACE

// fetch('https://jsonplaceholder.typicode.com/posts')
// .then((res)=>{
//     return res.json();     //FORMATTING
// })
// .then((data)=>{
//     // data arrary
//     document.write(data[0].title);
//     // inputselect
//     // .text content
// });