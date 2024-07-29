const prompt = require("prompt-sync")();

console.log("welcome to the game");
console.log("you have 5 turns");
// let usernum = prompt("enter R for rock,P for paper ,S for scissor:\n");
let myArr = ["R", "P", "S"];
const max = 2;
const min = 0;
// console.log(Math.floor(Math.random()*(max-min+1))+min);
let score=0;
// score=score+10;
let i = 0;

while (i < 5) {
  let randomindex = Math.floor(Math.random() * (max - min + 1)) + min;
  let compnum = myArr[randomindex];
  let usernum = prompt("enter R for rock,P for paper ,S for scissor:\n");
  console.log(usernum, compnum);
  if (usernum === "R" && compnum === "P") {
    console.log(`${compnum}cut down${usernum}`);
    console.log(`ur score is ${score}`)
     
  } else if (usernum === "P" && compnum === "S") {
    console.log(`${compnum} cut down ${usernum}`);
    console.log(`ur score is ${score}`)

    
  } else if (usernum === "S" && compnum === "R") {
    console.log(`${compnum} cut down ${usernum}`);
    console.log(`ur score is ${score}`)

    
  } else if (usernum === "S" && compnum === "P") {
    console.log(`${usernum} cut down ${compnum}`);
    console.log(`ur score is ${score=score+10}`)
  } else if (usernum === "R" && compnum === "S") {
    console.log(`${usernum} cut down ${compnum}`);
    console.log(`ur score is ${score=score+10}`)

  } else if (usernum === "P" && compnum === "R") {
    console.log(`${usernum} cut down ${compnum}`);
    console.log(`ur score is ${score=score+10}`)

  } else {

    console.log("draw");
  }

  i++;
}

console.log("ur game is over");
console.log(`UR FINAL SCORE IS ${score}`);