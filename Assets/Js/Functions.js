// functions

// what a function //
// function definition
// function declaration
//calling function

let st = 5.2;
console.log(Math.floor(5.9));
console.log(Math.ceil(st));
console.log(Math.round(5.9));
console.log(Math.min(1, 2, 3, 4, 6, 7, 8, 9));
console.log(Math.round(Math.random() * 10));
let guessGame = (ipt) => {
  let rangen = Math.random() * 10;
  let generatedNum = Math.round(rangen);
  if (generatedNum == ipt) {
    console.log("you guessed right");
  } else {
    console.log("you guessed wrong.Try again");
  }
  console.log("Computer generated " + generatedNum);
};
guessGame(3);


// three elements
//function declaration
//function definition
// function calling
// function fnc (){
// let z = x + y;
// return z;
// }
// fuc();
// // console.log(fuc())
// var fnc = function (){
//     let z = x + y;
//     return z;
// }
// fuc =()=> {let z = x + y;}

let x = 50; //global scope
let y = 3;
let ab = 0;
fn = () => {
  let z = x + y;
  return z;
};
console.log(fn());
fuc = () => {
  let z = x + y;
  return z;
};
ab = fuc();
console.log(ab);

// parameterised function
fucs = (c) => {
  let z = c * 6;
  return z;
};
console.log(fucs(10));

fucs = (c, d) => {
  let z = c * 6 + d;
  return z;
};
console.log(fucs(10, 67));
