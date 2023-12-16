var x, y, z;
// x = parseInt(prompt("Enter first Number", ""));
// y = parseInt(prompt("Enter  second number", ""));
// z = parseInt(prompt("Enter third number", ""));
// finding maximum number
// comparing first two numbers and then to the third
// we will consider using relational and logical operators
if (x == y || x == z || y == z) {
  console.log("Invalid");
} else {
  if (y > x && y > z) {
    // will work if condition returns true
    console.log(y);
  }
  if (x > y && x > z) {
    console.log(x);
  }
  if (z > y && z > x) {
    console.log(z);
  }
}
