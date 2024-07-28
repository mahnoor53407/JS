const prompt = require("prompt-sync")();

console.log("welcome to the game")
let usernum = console.log(prompt("enter R for rock,P for paper ,S for scissor:\n"));
let myArr=["R","P","S"]
let compnum= Math.random([0,1,2])


 
    if(usernum==R&&compnum==P){
        console.log(`${compnum}cut down${usernum}`);
    }
   else if(usernum==P&&compnum==S){
        console.log(`${compnum}cut down${usernum}`);
    }
   else if(usernum==S&&compnum==R){
        console.log(`${compnum}cut down${usernum}`);
    }
    else if(usernum==S&& compnum==P){
        console.log(`${usernnum}cut down ${compnum}`);
    }
    else if(usernum==R&&compnum==S){
        console.log(`${usernnum}cut down ${compnum}`);
    }
   else if(usernum==P&&compnum==R){
        console.log(`${usernnum}cut down ${compnum}`);
    }
   else{"draw"}
   

