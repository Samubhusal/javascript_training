//TODO:generate random number which the ranges from:0,1,2,3
//if generated number is 1:console("the genrated number is 1")

let randomResult=(Math.random()*4);
if(randomResult==0){
        console.log('Generated number is 0');
    }else if(randomResult==1){
        console.log('generated number is 1');
    }else if(randomResult==2){
        console.log('generated number is 2');
    }else{
        console.log('generated number is 3');
    };
console.log(randomResult);


let players=['anisha','samikshya','daina','bhawana'];
let result=Math.trunc(Math.random()*players.length); //generates from 0-4
console.log(`The random winner is:${players[result]}`); //accessing array index
