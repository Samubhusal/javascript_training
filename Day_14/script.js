//----------------------SWITCH CASE-------------------------
//EXACTLY SAME AS IF ELSE IF
//ONLY SYNTACTIC SUGAR (ANOTHER SYNTAX FOR IF ELSE )

// let dayMatch="monday";
// switch(dayMatch){
//     case"sunday"://same as if(dayMatch=="sunday")
//      console.log('case for sunday matched');
//      break;
//     case"monday"://same as if(dayMatch=="monday")
//       console.log('case for monday matched');
//       break;
//     case"tuesday":
//       console.log('case for tuesday matched');
//       break; 
//     default:
//         console.log('none of the case matched');
// }

// let day=Number(prompt('Enter your day number'));
// switch(day){
//     case 1:
//         console.log('sunday');
//         break;
//     case 2:
//         console.log('monday');
//         break;
//     case 3:
//         console.log('tuesday');
//         break;
//     case 4:
//         console.log('wednesday');
//         break;
//     case 5:
//         console.loog('thursday');
//         break;
//     case 6:
//         console.log('friday');
//         break;
//     case 7:
//         console.log('saturday');
//         break;
//     default:
//          console.log('none of the case matched');

               
// }

//input teo number from user and perform + - * % /

// let userNumber=Number(prompt('Enter your first number'));
// let userNumber1=Number(prompt('Enter your second number'));
// let matchSymbol=prompt('Enter your symbol (+,-,/,*,%)');
// switch(matchSymbol){
//     case '+':
//         console.log(userNumber + userNumber1);
//         break;
//     case '-':
//         console.log(userNumber-userNumber1);
//         break;
//     case '/':
//         if(userNumber1==0){
//             console.log('cannot divided by zero');
//             break;
//         }else{
//         console.log(userNumber / userNumber1);
//         break;
//         }
//     case '*':
//         console.log(userNumber *userNumber1);
//         break;   
//     case '%':
//         console.log(userNumber % userNumber1);
//         break; 
//     default:
//          console.log('none of the case matched');            
// }


//  ASSIGMENT

let balance = 100000;
let choice;

do {
    choice = Number(prompt(
        "Welcome to the Bank Management System\n\n" +
        "1. Deposit Money\n" +
        "2. Withdraw Money\n" +
        "3. Check Balance\n" +
        "4. Exit\n\n" +
        "Enter your choice (1-4):"
    ));

    switch (choice) {
        case 1:
            let depositAmount = Number(prompt("Enter amount to deposit:"));
            if (depositAmount > 0) {
                balance += depositAmount;
                alert("Rs." + depositAmount + " deposited successfully.\nNew Balance: Rs." + balance);
            } else {
                alert("Invalid deposit amount.");
            }
            break;

        case 2:
            let withdrawAmount = Number(prompt("Enter amount to withdraw:"));
            if (withdrawAmount > 0 && withdrawAmount <= balance) {
                balance -= withdrawAmount;
                alert("Rs." + withdrawAmount + " withdrawn successfully.\nNew Balance: Rs." + balance);
            } else if (withdrawAmount > balance) {
                alert("Insufficient balance.");
            } else {
                alert("Invalid withdrawal amount.");
            }
            break;

        case 3:
            alert("Current Balance: Rs." + balance);
            break;

        case 4:
            alert("Thank you for using our service!");
            break;

        default:
            alert("Invalid choice. Please select from 1 to 4.");
            break;
    }

} while (choice !== 4);

