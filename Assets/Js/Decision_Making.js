console.log("External js");
// operators
//logical {and or not - && || !}
//relational operators {> < == != >= <= }
//arithmetic - {+ -* /}
//relational operator return boolean values
var x;
var y;
var z;
var result;
x = 20;
y = 10;
z = 20;
result = x == z;
// console.log(result)
console.log(x > y); // true
console.log(x > z); // false
console.log(x > z && x > z); //false
// or
console.log(x > z || x > y);
//not
// will you marry me
// !no  == yes
//!no
///  implementing relational operators in  decision making
if (/*condition*/ false) {
  //code block
  console.log("condition is true");
}
// var age =prompt("Enter age","")
// var adaAge = parseInt(age)
// console.log(adaAge)
// console.log( adaAge + 2)

/*Build a simple ATM
  - That can perform a simple withdrawal operation with a valid pin
  - Ensure the user doesn't withdraw more than the user's account balance
  - user should be able to know their available balance
*/
// simple ATM
var pin = 1234;
var outstanding = 5000;

console.log("Welcome!.");
var pinRequest = parseInt(prompt("Please Enter your secrete number", ""));
console.log(pinRequest);
//decision making using if statement

if (pinRequest == pin) {
  var amRequest = parseFloat(prompt("Please Enter amount"));
  console.log("Please wait while your transaction is processing.");

  if (amRequest <= outstanding) {
    var balance = outstanding - amRequest;
    console.log("Releasing ..... " + amRequest);
    console.log("Available Balance " + balance);
  } else {
    console.log("Insufficient amount.")
  }
} else {
    console.log("Invalid pin! Please enter the correct pin.")
}
